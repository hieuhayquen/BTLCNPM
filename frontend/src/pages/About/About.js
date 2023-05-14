import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Image } from '@chakra-ui/react';
import HashLoader from 'react-spinners/HashLoader';
import './aboutcss.css';
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            Line.current.classList.add('lineon');
            text.current.classList.add('titleon');
        }, 5);

        return () => {};
    }, []);
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>

            <div className="headingA">
                <div className="line" ref={Line}></div>
                <h1 className="title" ref={text}>
                    About Us
                </h1>
            </div>
            <div className="Content1">
                <div className="text">
                    <h1>Why?</h1>
                    <p>
                         It is convenient that the hair of the work comes out of the exercise, except that it softens some of the irritation.
                         Let him achieve the advantage of the soul with some effort, unless he criticizes the pain of something in football
                         no They should be adipisisic elit that in any one without desire but with hard work. That's our problem
                         that and pleasure. They leave only from and develop services from it. It will be a great thing to soften them
                         He wants the mind to be trained in this way out of pain. The pain will come out of the forgiveness of those who work hard
                         we will wait for a while. So that the desires of those labors that come out of pain are softened
                         some great work Let the least pain and desire flee from those who are at it. It is an exercise
                         whether it is the desire to work or not to work. And in fact there are a few hairs that need to be removed
                         will be followed. For the very desire of labor is the pleasure of the time and desire of any result
                         except Nostrud softens without any effort to rush at such a time. Time to enjoy the pleasure of anyone
                         therefore from the least they come out that there is no forgiveness. It is convenient to get out of the hair of the work
                         Exercitaion veniam excepteur do mollit alicip irure. Adipisicion may be of some benefit to the soul
                         there is nothing in football unless he criticizes his work with pain. They should be adipisisic elit that anywhere
                         without desire, without effort. This is our labor, or it is also pleasure. They leave only from and elit
                         services from it. It will result in some great softening of the mind, and this exercise is from it
                         with pain The pain will come out, I will forgive him who will save the time for our labor. I give just like that
                         That desire for labor is brought forth by pain, and softened by great labor. The pain and the desire are the least
                         those who are at it should flee. It's a routine work, whether or not it's an exception
                         desire And for the smallest of hairs, they will be pursued. At any time and at will
                         for the very desire of labor is an exception. Nostrud softens with no effort to waste time
                         just like that There is no time to let anyone come out of our land with the least pleasure.
                    </p>
                </div>

                <div className="imagecontainer">
                    <div className="Imageabt">
                        <Image
                            className="mImage"
                            boxSize="400px"
                            objectFit="cover"
                            src="https://images.unsplash.com/photo-1614771637369-ed94441a651a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                            alt="Segun Adebayo"
                        />
                    </div>
                </div>
            </div>
            <div className="Content2">
                <div className="imagecontainer">
                    <div className="Imageabt">
                        <Image
                            className="mImage"
                            boxSize="400px"
                            objectFit="cover"
                            src="https://images.unsplash.com/photo-1614038276039-667c23bc32fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80"
                            alt="Segun Adebayo"
                        />
                    </div>
                </div>
                <div className="text">
                    <h1>How?</h1>
                    <p>
                         It is convenient that the hair of the work comes out of the exercise, except that it softens some of the irritation.
                         Let him achieve the advantage of the soul with some effort, unless he criticizes the pain of something in football
                         no They should be adipisisic elit that in any one without desire but with hard work. That's our problem
                         that and pleasure. They leave only from and develop services from it. It will be a great thing to soften them
                         He wants the mind to be trained in this way out of pain. The pain will come out of the forgiveness of those who work hard
                         we will wait for a while. So that the desires of those labors that come out of pain are softened
                         some great work Let the least pain and desire flee from those who are at it. It is an exercise
                         whether it is the desire to work or not to work. And in fact there are a few hairs that need to be removed
                         will be followed. For the very desire of labor is the pleasure of the time and desire of any result
                         except Nostrud softens without any effort to rush at such a time. Time to enjoy the pleasure of anyone
                         therefore from the least they come out that there is no forgiveness. It is convenient to get out of the hair of the work
                         Exercitaion veniam excepteur do mollit alicip irure. Adipisicion may be of some benefit to the soul
                         there is nothing in football unless he criticizes his work with pain. They should be adipisisic elit that anywhere
                         without desire, without effort. This is our labor, or it is also pleasure. They leave only from and elit
                         services from it. It will result in some great softening of the mind, and this exercise is from it
                         with pain The pain will come out, I will forgive him who will save the time for our labor. I give just like that
                         That desire for labor is brought forth by pain, and softened by great labor. The pain and the desire are the least
                         those who are at it should flee. It's a routine work, whether or not it's an exception
                         desire And for the smallest of hairs, they will be pursued. At any time and at will
                         for the very desire of labor is an exception. Nostrud softens with no effort to waste time
                         just like that There is no time to let anyone come out of our land with the least pleasure.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
