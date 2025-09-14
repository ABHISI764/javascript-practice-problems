
// Q. What is try and catch
/* Ans.The try statement allows you to define a block of code to be tested for errors while it is being executed. 
       The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
       The JavaScript statements try and catch come in pairs: try { Block of code to try. */

    // YOutube Video URL: https://www.youtube.com/watch?v=rHQ1etbQpmQ


    // Example 1: 

    // try {
    //     console.log(age);    ₹       

    // } catch (error) {
    //     console.log("error.message ", error.message);
    //     console.log("error.name ", error.name);
    // }

    // const a = 2 * 4;
    // console.log('important ', a)

    // Example 2 : 

    // try {
    //     const res = 'y';
    //     if(res === 'y'){
    //         throw {
    //             sendingThorowbyMe: "this throw sending by me manually"
    //         }
    //     }
    // } catch (error) {
    //     console.log(error)
    // }

    try {
        const res = 'y';
        if (res === 'y') {
            throw new Error(" I'm Sending error")
        }
    } catch (error) {
        console.log(error.name, error.message)
    } finally {
        console.log("from finally but it's still working")
        const a = 2 * 4;
        console.log('important ', a)
    }

    // Strill it's working because try and catch
    const a = 2 * 4;
    console.log('important ', a)