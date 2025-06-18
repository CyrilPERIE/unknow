const staticText = {
    metadata: {
        title: "Unknow",
        description: "I don't know what i want to do but i will do it the cleanest",
    },
    dashboard: {
        title: "Dashboard",
    },
    home: {
        title: "Accueil",
    },
    login: {
        title: "Connexion",
    },
    passwordForgotten: {
        title: "Mot de passe oublié",
        backToLogin: "Retour à la connexion",
    },
    logout: {
        title: "Déconnexion",
    },
    register: {
        title: "Inscription",
        register_success: "Email envoyé, veuillez vérifier votre boîte de réception",
    },
    user: {
        zod_error_messages: {
            email_invalid: "L'email est invalide",
            password_min: (minLength: number) => `Le mot de passe doit contenir au moins ${minLength} caractères`,
            password_max: (maxLength: number) => `Le mot de passe doit contenir au plus ${maxLength} caractères`,
            name_required: "Le nom est requis",
            password_confirmation_invalid: "Les mots de passe ne correspondent pas",
        },
        errors: {
            email_already_exists: "L'email existe déjà",
        },
        placeholders: {
            email: "Email",
            password: "Mot de passe",
            password_confirmation: "Confirmation du mot de passe",
            name: "Nom",
        },
        descriptions: {
            email: "L'email est utilisé pour se connecter à votre compte",
            password: "Le mot de passe est utilisé pour sécuriser votre compte",
            name: "Le nom sera visible par tous",
        }
    }
}

export default staticText;