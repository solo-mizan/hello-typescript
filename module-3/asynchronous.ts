// // mocking

// const makePromise = (): Promise<string> => {
//    return new Promise<string>((resolve, reject) => {
//         const data: string = 'data is fetched';
//         if (data) {
//             resolve(data)
//         }
//         else {
//             reject('failed to fetched data');
//         }
//     })
// }

// const makePromise1 = (): Promise<boolean> => {
//    return new Promise<boolean>((resolve, reject) => {
//         const data: boolean = true;
//         if (data) {
//             resolve(data)
//         }
//         else {
//             reject(false);
//         }
//     })
// }

// const getPromiseData = async () => {
//     const data = await makePromise()
//     return data;
// } 

// interface ITodo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

// const getTodo = async(): Promise<ITodo> => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/7");
//     const data = await res.json();
//     console.log(data);
//     return data;
    
// }
// getTodo();