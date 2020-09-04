const timeout = (n: number) =>{
    return new Promise(res=>setTimeout(res,n))
}

export const addNumbers = async (a:number,b:number) => {
    await timeout(2000);
    return a+b;
}

(async () => {
    console.log(await addNumbers(1,2));
})()