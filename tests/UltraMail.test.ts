import UltraMail from "../src/UltraMail"

const randomKey = "aoweijfaskjvnasda"

test("testing user route online", async () => {
    const ult = new UltraMail(randomKey)
    const res = await ult.testUsers()
    expect(res).toBe(true)
})

test("testing addUserAction route online", async () => {
    const ult = new UltraMail(randomKey)
    const res = await ult.testAdd()
    expect(res).toBe(true)
})