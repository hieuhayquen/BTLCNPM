const products = [
    {
        name: 'Jacket',
        images: [
            'https://i.imgur.com/gJ5WdCb.jpg',
            'https://i.imgur.com/gg43pzm.jpg',
            'https://i.imgur.com/gg43pzm.jpg',
        ],
        description:
            'It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out; they are in fault who abandon their duties and soften their hearts, that is toil.',
        category: ['Men', 'Jacket'],
        sizes: ['S', 'XS'],
        price: 89.99,
        countInStock: 10,
        rating: 0,
        numReviews: 0,
    },
    {
        name: 'Black Shoes',
        images: [
            'https://i.imgur.com/vN2y3Sh.jpg',
            'https://i.imgur.com/vN2y3Sh.jpg',
            'https://i.imgur.com/vN2y3Sh.jpg',
        ],
        description:
            'It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out; they are in fault who abandon their duties and soften their hearts, that is toil.',
        category: ['Shoes', 'Men'],
        sizes: ['S', 'XS'],
        price: 599.99,
        countInStock: 7,
        rating: 0,
        numReviews: 0,
    },
    {
        name: 'Brown Shoes',
        images: [
            'https://i.imgur.com/X3sshLQ.jpg',
            'https://i.imgur.com/X3sshLQ.jpg',
            'https://i.imgur.com/X3sshLQ.jpg',
        ],
        description:
            'It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out; they are in fault who abandon their duties and soften their hearts, that is toil.',
        category: ['Shoes', 'Men'],
        sizes: ['S', 'XS'],
        price: 929.99,
        countInStock: 5,
        rating: 0,
        numReviews: 0,
    },
    {
        name: 'Black Watch',
        images: [
            'https://i.imgur.com/7AIhl9Y.jpg',
            'https://i.imgur.com/7AIhl9Y.jpg',
            'https://i.imgur.com/7AIhl9Y.jpg',
        ],
        description:
            'It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out; they are in fault who abandon their duties and soften their hearts, that is toil.',
        category: ['Watches', 'Men'],
        sizes: ['S', 'XS'],
        price: 399.99,
        countInStock: 11,
        rating: 0,
        numReviews: 0,
    },
    {
        name: 'Gray Jacket',
        images: [
            'https://i.imgur.com/26Vuebt.jpg',
            'https://i.imgur.com/26Vuebt.jpg',
            'https://i.imgur.com/26Vuebt.jpg',
        ],
        description:
            'It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out; they are in fault who abandon their duties and soften their hearts, that is toil.',
        category: ['Women', 'jacket'],
        sizes: ['S', 'XS'],
        price: 49.99,
        countInStock: 7,
        rating: 0,
        numReviews: 0,
    },
    {
        name: 'Sweaters',
        images: [
            'https://i.imgur.com/FqUJLMq.jpg',
            'https://i.imgur.com/3k5mDDN.jpg',
            'https://i.imgur.com/iWpQlso.jpg',
        ],
        description:
            'It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out; they are in fault who abandon their duties and soften their hearts, that is toil.',
        category: ['Women'],
        sizes: ['S', 'XS'],
        price: 29.99,
        countInStock: 4,
        rating: 0,
        numReviews: 0,
    },
    {
        name: 'Wind Jacket',
        images: [
            'https://i.imgur.com/qU9avme.jpg',
            'https://i.imgur.com/usDXEF8.jpg',
            'https://i.imgur.com/hmLilCy.jpg',
        ],
        description:
            'It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out; they are in fault who abandon their duties and soften their hearts, that is toil.',
        category: ['Jacket', 'Men'],
        sizes: ['S', 'XS'],
        price: 19.99,
        countInStock: 5,
        rating: 0,
        numReviews: 0,
    },
    {
        name: 'Red T-shirt',
        images: [
            'https://i.imgur.com/2zcsO2C.jpg',
            'https://i.imgur.com/PsxB6lI.jpg',
            'https://i.imgur.com/OfaTKXp.jpg',
        ],
        description:
            'It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out; they are in fault who abandon their duties and soften their hearts, that is toil.',
        category: ['Jacket'],
        sizes: ['S', 'XS'],
        price: 19.99,
        countInStock: 9,
        rating: 0,
        numReviews: 0,
    },
    {
        name: 'Blue Bags',
        images: [
            'https://i.imgur.com/QN2BSdJ.jpg',
            'https://i.imgur.com/XPb2MDt.jpg',
            'https://i.imgur.com/RA2eY23.jpg',
        ],
        description:
            'It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out; they are in fault who abandon their duties and soften their hearts, that is toil.',
        category: ['Bag', 'Women'],
        sizes: ['S', 'XS', 'L', 'XL'],
        price: 50.66,
        countInStock: 9,
        rating: 0,
        numReviews: 0,
    },
];

export default products;
