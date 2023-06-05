import * as fs from 'fs';
export class loginPage { 
    async performLogin() {
      const credentials = JSON.parse(fs.readFileSync('./e2e/src/fixtures/sauce-credentials.json', 'utf8'));
      const { userName, password } = credentials.validCredentials;
  
      await $('~test-Username').setValue(userName);
      await $('~test-Password').setValue(password);
      await $('~test-LOGIN').click();
    }
  }
  