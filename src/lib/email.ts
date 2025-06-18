import { UserEmailSchemaType } from "@/domain/entities/user";

type TemplateParamsMap = {
  1: { URL: string };
};

type EmailPayload<T extends keyof TemplateParamsMap> = {
  sender: UserEmailSchemaType;
  to: UserEmailSchemaType[];
  templateId: T;
  params: TemplateParamsMap[T];
};

const sendEmail = async <T extends keyof TemplateParamsMap>(
  data: EmailPayload<T>
) => {
  const res = await fetch(process.env.BREVO_API_URL!, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": process.env.BREVO_API_KEY!,
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    return { error };
  }
  return { data };
};

const sendVerificationEmail = async (
  sender: UserEmailSchemaType,
  to: UserEmailSchemaType[],
  url: string
) => {
  const data: EmailPayload<1> = {
    sender,
    to,
    templateId: 1,
    params: {
      URL: url,
    },
  };
  const res = await sendEmail(data);
  if (res.error) {
    return { error: res.error };
  }
};

export { sendVerificationEmail };
