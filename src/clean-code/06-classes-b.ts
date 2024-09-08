(() => {

    // Aplicando el principio de responsabilidad única ==================== |
    type Gender = 'M' | 'F';

    interface PersonProps {
        birthday: Date,
        gender: Gender,
        name: string,
    }

    class Person {
        public birthday: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthday }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthday = birthday;
        }
    }

    interface UserProps extends PersonProps {
        email: string,
        role: string,
    }

    class User extends Person {
        public email: string;
        public role: string;
        public lastAcces: Date;

        constructor(
            { name, gender, birthday, email, role }: UserProps
        ) {
            super({ name, gender, birthday });
            this.email = email;
            this.role = role;
            this.lastAcces = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps extends UserProps {
        workingDirectory: string,
        lastOpenFolder: string,
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
            { name, gender, birthday, email, role, workingDirectory, lastOpenFolder }: UserSettingsProps
        ) {
            super({ email, role, name, gender, birthday });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'mateo@gmail.com',
        role: 'admin',
        name: 'Mateo',
        gender: 'M',
        birthday: new Date('2004-10-23')
    });

    console.log({ userSettings });
})();