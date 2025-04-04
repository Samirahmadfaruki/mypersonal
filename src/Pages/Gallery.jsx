import React from "react";
import Card from "../Components/Card";
import Layout from "../Components/Layout";


const Gallery = () => {

    const eventImages = {
        "Campus": [
            "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd",
            "https://images.unsplash.com/photo-1583373834259-46cc92173cb7",
            "https://images.unsplash.com/photo-1527891751199-7225231a68dd"
        ],
        "Republic Day": [
            "https://images.unsplash.com/photo-1585802540432-60662b65ca62",
            "https://plus.unsplash.com/premium_photo-1682092645573-edbd43c0dff2",
            "https://images.unsplash.com/photo-1649008726820-d90aeb70c32e"
        ],
    };

    return (
        <Layout>

            <h2 className="p-4 text-2xl font-bold text-left text-primary">VIPS GODDA Gallery</h2>

            {Object.keys(eventImages).map((event, index) => (
                <div key={index} className="w-full my-6 text-center">

                    <h2 className="py-2 text-xl font-bold text-white bg-primary">{event}</h2>

                    <div className="flex flex-wrap justify-center gap-6 mt-4">
                        {eventImages[event].map((image, imgIndex) => (
                            <Card key={imgIndex} image={image} />
                        ))}
                    </div>
                </div>
            ))}
        </Layout>
    );
};

export default Gallery;
