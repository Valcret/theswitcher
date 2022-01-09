class FormValidator
{
    pseudo;
    validPseudo;
    password;
    validPassword;

    constructor(pseudo,password)
    {
        this.pseudo = pseudo;
        this.password = password;
        this.validatePseudo();
        this.validatePassword();
    }

    validatePseudo()
    {
        this.validPseudo = !(typeof this.pseudo != "string" || this.pseudo.length <= 1);
    }

    validatePassword()
    {
        this.validPassword = !(typeof this.password != "string" || this.password.length <= 1);
    }
}

export{FormValidator}