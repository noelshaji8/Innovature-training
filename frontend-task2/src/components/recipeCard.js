import React from 'react';
import '../styles.css';
import { Box, Card, Text } from '@radix-ui/themes';

// import * as NavigationMenu from '@radix-ui/react-navigation-menu';
// import * as Avatar from '@radix-ui/react-avatar';

// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../redux/userSlice';
// import { useNavigate } from 'react-router-dom';



function RecipeCard({ recipe }) {
    return (<Box maxWidth="350px">
        <Card className="card" >

            <Text className="card-h" as="div" size="2" weight="bold">
                {recipe.title}
            </Text>
            <Text className="card-p" as="div" color="gray" size="2">
                {recipe.description}
            </Text>

        </Card>
    </Box>);
}

export default RecipeCard;