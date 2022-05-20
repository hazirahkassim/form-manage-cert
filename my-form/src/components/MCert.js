import React from "react";
import "../css/form.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '463px',
  bgcolor: '#FFFFFF',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:'20px',
  p: 4,
  
};

export default function MCert(){    
    const handleChange = (event) => {
   
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return ( 
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '678px', height: '39px' },
        }}
        noValidate
        autoComplete="off"
    >
    <div className="mainForm">

        <div className="Info">
            <div className="Title">
              Principal Ammount
            </div>
        <div className="subTitle">
        <Button onClick={handleOpen}>
        <TextField
          disabled
          id="filled-disabled"
          defaultValue="RM100,000.00"
          variant="filled"
        /></Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            Change the principal amount?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Stack spacing={2} direction="row">

        <Button variant="contained" className="yes">Yes</Button>
        <Button variant="outlined" className="Cancel">Cancel</Button>

</Stack>
          </Typography>
        </Box>
      </Modal>
        </div>
        </div>

        <div className="Info">
            <div className="Title">
                Term
            </div>
        <div className="subTitle">
        <Box sx={{ minWidth: '678px' }}>
        <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={1}>1 Months</MenuItem>
          <MenuItem value={2}>2 Months</MenuItem>
          <MenuItem value={3}>3 Months</MenuItem>
          <MenuItem value={4}>4 Months</MenuItem>
          <MenuItem value={5}>5 Months</MenuItem>
          <MenuItem value={6}>6 Months</MenuItem>
          <MenuItem value={7}>7 Months</MenuItem>
          <MenuItem value={8}>8 Months</MenuItem>
          <MenuItem value={9}>9 Months</MenuItem>
          <MenuItem value={10}>10 Months</MenuItem>
          <MenuItem value={11}>11 Months</MenuItem>
          <MenuItem value={12}>12 Months</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        </div>

        <div className="Info">
            <div className="Title">
            Profit Rate (p.a)
            </div>
        <div className="subTitle">
        <TextField
          disabled
          id="filled-disabled"
          defaultValue="3.80%"
          variant="filled"
        />
        </div>
        </div>

        <div className="Info">
            <div className="Title">
            Maturity Date
            </div>
        <div className="subTitle">
        <TextField
          disabled
          id="filled-disabled"
          defaultValue="7 Feb 2022"
          variant="filled"
        />
        </div>
        </div>

        <div className="Info">
            <div className="Title">
                Profit Payment Mode
            </div>
        <div className="subTitle">
        <Box sx={{ minWidth: '678px' }}>
        <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={1}>Add to Principal</MenuItem>
          <MenuItem value={2}>Credit to Account</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        </div>

        <div className="Info">
            <div className="Title">
            Instruction on Maturity
            </div>
        <div className="subTitle">
        <Box sx={{ minWidth: '678px' }}>
        <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={1}>Auto Renewal</MenuItem>
          <MenuItem value={2}>Credit to Account</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        </div>

        <div className="Info">
            <div className="Title">
            Credit to Account
            </div>
        <div className="subTitle">
        <Box sx={{ minWidth: '678px' }}>
        <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
                <MenuItem value={1}><div className="account">SME First Account 
                    <div className="noacc"> 3101 2130 6725</div>
                    <div className="amount">RM 690,420.00</div></div>
                </MenuItem>
                    
                <MenuItem value={2}><div className="account">SME First Account 
                    <div className="noacc"> 1130 9340 0119</div>
                    <div className="amount">RM 310,000.00</div></div>
                </MenuItem>

                <MenuItem value={3}><div className="account">SME First Account 
                    <div className="noacc"> 3101 2130 6725</div>
                    <div className="amount">-RM 10,000.00</div></div>
                    </MenuItem>

                <MenuItem value={4}><div className="account">SME First Account 
                    <div className="noacc"> 3101 2130 6725</div>
                    <div className="amount">RM 310,000.00</div></div>
                </MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        </div>

        <div className="Info">
            <div className="Title">
            Profit Payment Frequency
            </div>
        <div className="subTitle">
        <Box sx={{ minWidth: '678px' }}>
        <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={1}>Monthly</MenuItem>
          <MenuItem value={2}>On Maturity</MenuItem>
          <MenuItem value={3}>6 Months</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        </div>
        
    <div className="terms">
        By clicking Done, you hereby agree to our <div className="conditions">Terms and Conditions</div> 
    </div>

    <Stack spacing={2} direction="row">

      <Button variant="contained" className="save">Save Changes</Button>
      <Button variant="outlined" className="cancel">Cancel</Button>

    </Stack>
    </div>
    </Box>
      
    );
};

