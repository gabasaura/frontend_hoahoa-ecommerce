import React from 'react';

const Features: React.FC = () => {
    return (
        <section className="features" style={{ position: 'relative', marginTop: '-100px', zIndex: 2 }}>
            <div className="container-lg">
                <div className="bg-black p-5">
                    <div className="row">
                        {featureData.map((feature, index) => (
                            <div className="col-md-3" key={index}>
                                <h4 className="element-title text-capitalize my-3">{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const featureData = [
    {
        title: 'Book An Appointment',
        description: 'At imperdiet dui accumsan sit amet nulla risus est ultricies quis.',
    },
    {
        title: 'Pick up in store',
        description: 'At imperdiet dui accumsan sit amet nulla risus est ultricies quis.',
    },
    {
        title: 'Special packaging',
        description: 'At imperdiet dui accumsan sit amet nulla risus est ultricies quis.',
    },
    {
        title: 'Free global returns',
        description: 'At imperdiet dui accumsan sit amet nulla risus est ultricies quis.',
    },
];

export default Features;
