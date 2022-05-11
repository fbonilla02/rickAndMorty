import getEpisode from "../helpers/getEpisode.js";

const character =  (data, container )=>{



    data.forEach( async(element) => {
        const{ name, status, episode, species, image, location} = element
        const valor = episode[0]
        let cap = await getEpisode(valor)

        container.innerHTML += `
        <section class="main-container" >
            <div class="img-container">
                <img src="${image}" alt="">
            </div>
            <div class="description-container" >
                <h3>${name}</h3>
                <span></span> <p>${status} - ${species}</p>
                <h6>Last Known location:</h6>
                <p>${location.name}</p>
                <h6>First seen in:</h6>
                <p>${cap.name}</p>
            </div>
        </section>
`;
    });
}

export default character;