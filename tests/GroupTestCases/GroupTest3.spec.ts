import {test,expect} from '@playwright/test'

test ("Group3--test cases1",async()=>
{
    console.log("Hi I am Test case1-Group3");
})
test ("Group3--test cases2",async()=>
{
    console.log("Hi I am Test case2-Group3");
})
test.skip("Group3--test cases3",async()=>
{
    console.log("Hi I am Test case3-Group3");
})
test ("Group3--test cases4",async()=>
{
    console.log("Hi I am Test case4-Group3");
})
test ("Group3--test cases5",async()=>
{
    console.log("Hi I am Test case5-Group3");
})
test ("Group3--test cases6",async()=>
{
    console.log("Hi I am Test case6-Group3");
})

test("Group3--test cases7",async()=>
{
    console.log("Hi I am Test case7-Group3");
})
test ("Group3--test cases8",async()=>
{
    console.log("Hi I am Test case8-Group3");
})
test ("Group3--test cases9",async()=>
{
    console.log("Hi I am Test case9-Group3");
})
test ("Group3--test cases10",async()=>
{
    console.log("Hi I am Test case10-Group3");
})
test ("Group3--test cases11",async()=>
{
    console.log("Hi I am Test case11-Group3");
})
test.fail("Group3--test cases12",async()=>
{
   // console.log("Hi I am Test case12-Group3");
   expect(5).toBe(15);
})
test.fixme("Group3--test cases13",async()=>
{
    console.log("Hi I am Test case13-Group3");
})