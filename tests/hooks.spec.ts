import {test,expect} from '@playwright/test'


test.beforeAll("Hi i am running bfore all", async()=>{
     console.log("hi I am Running before all");
})
test.beforeEach("Hi i am running bfore Each", async()=>{
     console.log("hi I am Running before Each");
})
test.afterAll("Hi i am running after all", async()=>{
     console.log("hi I am Running after all ");
})
test.afterEach("Hi i am running after all", async()=>{
     console.log("hi I am Running after Each ");
})

test ("Group1--test cases1",async()=>
{
    console.log("Hi I am Test case1-group1");
})
test ("Group1--test cases2",async()=>
{
    console.log("Hi I am Test case2-group1");
})
test ("Group1--test cases3",async()=>
{
    console.log("Hi I am Test case3-group1");
})
test ("Group1--test cases4",async()=>
{
    console.log("Hi I am Test case4-group1");
})
test ("Group1--test cases5",async()=>
{
    console.log("Hi I am Test case5-group1");
})
test ("Group1--test cases6",async()=>
{
    console.log("Hi I am Test case6-group1");
})

test ("Group1--test cases7",async()=>
{
    console.log("Hi I am Test case7-group1");
})
test ("Group1--test cases8",async()=>
{
    console.log("Hi I am Test case8-group1");
})
test ("Group1--test cases9",async()=>
{
    console.log("Hi I am Test case9-group1");
})
test ("Group1--test cases10",async()=>
{
    console.log("Hi I am Test case10-group1");
})
test ("Group1--test cases11",async()=>
{
    console.log("Hi I am Test case11-group1");
})
