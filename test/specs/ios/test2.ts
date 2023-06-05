describe("swag Labs",()=>{
    it("login",async()=>{
        await $('~test-Username').setValue("standard_user");
        await $('~test-Password').setValue("secret_sauce");
        await $('~test-LOGIN').click()
    })
})