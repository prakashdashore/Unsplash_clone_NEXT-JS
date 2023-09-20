import axios from "axios";

// export let singledata = async (id) => {
//     let { data } = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts/" + id
//     );
//     await wait(2000);
//     return data;
// };


export let randomImages = async (page) => {
    let { data } = await axios.get(
        `https://api.unsplash.com/photos?client_id=Xo1JuuXtZeFM3ke9eGQ1EoI7AV8PwnNUVE_WaVPmyqI&page=${page}`
    );
    await wait(2000);
    return data;
}

// export const searchImages = async (data) => {
//     const { data } = await axios.get(
//         `https://api.unsplash.com/photos?client_id=Xo1JuuXtZeFM3ke9eGQ1EoI7AV8PwnNUVE_WaVPmyqI&page=${page}`
//     );
//     await wait(2000);
//     return data;
// }

export let searchingImageHendler = async (searchingImage) => {0

    let {data} = await axios.get(`https://api.unsplash.com/search/photos?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58&page=1&query=${searchingImage}`);
    await wait(2000)
    return data.results;

};


export let wait = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
};