import { sum } from "../sum"

test("Sum fucntion should calculate the sum of the two numbers", () =>{
    const result = sum(3,3);
    //Assertion
    expect(result).toBe(6);
})