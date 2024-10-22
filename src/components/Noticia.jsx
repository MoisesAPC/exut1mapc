import React from 'react';
import { useState } from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'

const Noticia = ({ avatar, titulo, fecha, imagen, noticia, alt, numLikes }) => {

  const [liked, setLike] = useState(false);
  const [numLikesVariable, setNumLikes] = React.useState(numLikes);
  const [open, setOpen] = React.useState(false);  // Para el diálogo de compartir

  const handleOnLike = () => {
    setLike(!liked);
    // Si se ha pulsado el botón del like (liked == true), entonces aumentamos
    // el número de likes +1. En caso contrario, lo decrementamos en -1
    setNumLikes((liked) ? (numLikesVariable - 1) : (numLikesVariable + 1))
  };

  const handleAbrirDialogoCompartir = () => {
    setOpen(true);
  };

  const handleCerrarDialogoCompartir = () => {
    setOpen(false);
  };

  const handleOnWhatsAppPress = () => {
    console.log("Enviando por Whatsapp")
    handleCerrarDialogoCompartir();
  };

  const handleOnTelegramPress = () => {
    console.log("Enviando por Telegram")
    handleCerrarDialogoCompartir();
  };

  return (
    <Card>
      <CardContent>
      
        <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="flex-start">
            {/* Avatar */}
            <Avatar src={avatar} sx={{ mb: 2 }}/>
            
            {/* Título y fecha */}
            <Typography variant="h6" component="div">
                {titulo}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
                {fecha}
            </Typography>

            {/* Botón de tres puntos verticales */}
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </Grid>
      
        {/* CardMedia (imagen de fondo de la noticia) */}
        <CardMedia
          component="img"
          image={imagen}
          alt={alt}
          title={alt}
          height={194}
        />

        {/* Texto de la noticia */}
        <Typography variant="body2" color="text" sx={{ textAlign:'left', marginTop: '8px' }}>
            {noticia}
        </Typography>
            
        {/* Lo siguiente lo metemos en un "Grid container" para asegurarnos de que todos sus elementos aparezcan en la misma fila */}
        <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="flex-start">

            {/* Número de likes */}
            <Typography variant="body2" color="text" sx={{ textAlign:'left', marginTop: '8px' }}>
                {numLikesVariable}
            </Typography>

            {/* Botón de likes */}
            <IconButton onClick={handleOnLike}>
                {liked ? <FavoriteIcon color="success" /> : <FavoriteBorderIcon />}
            </IconButton>

            {/* Botón de compartir */}
            <IconButton onClick={handleAbrirDialogoCompartir} disabled={!liked}>
                {liked ? <ShareIcon color="info" /> : <ShareIcon />}
            </IconButton>
        </Grid>

        {/* Diálogo de confimación al pulsar en Compartir */}
            <Dialog
                open={open}
                onClose={handleCerrarDialogoCompartir}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/* Título del diálogo */}
                <DialogTitle id="alert-dialog-title">
                  {"COMPARTIR"}
                </DialogTitle>

                {/* Texto del diálogo */}
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    ¿A través de qué plataforma quieres compartir?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  
                {/* Botón de WhatsApp */}
                <IconButton onClick={handleOnWhatsAppPress}>
                    <WhatsAppIcon/>
                </IconButton>
                 
                 {/* Botón de Telegram */}
                <IconButton onClick={handleOnTelegramPress}>
                    <TelegramIcon/>
                </IconButton>

                </DialogActions>
              </Dialog>

      </CardContent>
    </Card>
  );
};

export default Noticia
