import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Button, IconButton } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
};

export default function HowToPlay() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton size="small" onClick={handleOpen}>
        <HelpOutlineIcon fontSize="large" />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h2" component="h2">
              How to Play
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography id="transition-modal-description" sx={{ mt: 4 }}>
                Place the number where you think it should go in the sequence
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Each time you place a number, a new random number between 1 and
                100 (inclusive) will be generated
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                All the numbers <strong>must</strong> be placed in ascending
                order
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Place all 10 numbers successfully to win
              </Typography>
            </Box>
            <Button variant="contained" onClick={handleClose} sx={{ mt: 4 }}>
              Let me try!
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
