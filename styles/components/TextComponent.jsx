export const TextStyle = {

    variants: {
        gradientTextHeading: {
            bgClip : 'text',
            bgGradient : 'linear(to-r, primaryLight, secondaryLight)',
            fontWeight : 'semibold',
            textAlign : ['center', 'center', 'left', 'left'],
            fontSize : ['45px', '45px', '50px', '70px']
        },

        regularSubheading: {
            color: 'primaryLight' ,
            fontWeight : 'semibold',
            textAlign : ['center', 'center', 'left', 'left' ],
            fontSize : ['25px', '25px', '30px', '30px']
        },

        para : {
            color : 'primaryLight',
            textAlign : 'center',
            fontSize : ['18px', '18px', '20px', '20px'],
            textAlign : 'center'
        }
    }

}

