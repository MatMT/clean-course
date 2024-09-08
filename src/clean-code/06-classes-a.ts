(() => {

    // No aplicando el principio de responsabilidad única ==================== |

    type Gender = 'M' | 'F';
    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthday: Date,
        ) { }
    }

    class User extends Person {
        private lastAcces: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthday: Date,
        ) {
            super(name, gender, birthday)
            this.lastAcces = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthday: Date,
        ) {
            super(email, role, name, gender, birthday);
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'mateo@gmail.com',
        'admin',
        'Mateo',
        'M',
        new Date('2004-10-23'));

    console.log({ userSettings, areCredentialValid: userSettings.checkCredentials() });
})();