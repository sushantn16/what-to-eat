import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const Foodcard = ({food}) => {

    


    return (
<Box mt={2} mb={2}>
        <Card sx={{ maxWidth: 345, m:'auto'}} >
            <CardMedia
                component="img"
                height="140"
                image={"/assets/"+food.image}
                alt={food.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {food.name}
                </Typography>

            </CardContent>
        </Card>
        </Box>
    );
}

export default Foodcard;


