import React from "react";
const TypeScript = () => {
    //Array
    const nums: number[][] = [[1, 2, 3], [4]]; // массив массивов чисел

    const learning : string[] = ['js', 'ts', 'react', 'react-native', 'GIT'];
    // @ts-ignore
    console.log(learning)
    const decided = learning.filter((f)=>f !== 'js').map((i)=>`${i} - done`)
    // @ts-ignore
    console.log(decided)
    return (
        <>

        </>
    );
};

export default TypeScript;
