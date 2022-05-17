import React from "react";
import "../css/form.css";
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: Rubik, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 720px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  margin: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: Rubik, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 9px 15px 10px;
  gap: 499px;
  margin: 10px 0;
  min-width: 735px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  outline: 0px;
  `,
);


const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;
  color: blue;
  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});


export default function Form(){    

    return (
        <>
        <div className = "mainForm">
            <div className = "subForm">
                <div className="Info">
                    <div className="subInfo1">
                        Principal Amount
                    </div>
                    <div className="subInfo2">
                        RM100,000.00
                    </div>
                </div>
                <div className="Info">
                    <div className="subInfo1">
                        Term
                    </div>
                    <div className="subInfo2DD">

                    <CustomSelect>
                    <StyledOption value={1}>1 Months</StyledOption>
                    <StyledOption value={2}>2 Month</StyledOption>
                    <StyledOption value={3}>3 Month</StyledOption>
                    <StyledOption value={4}>4 Month</StyledOption>
                    <StyledOption value={5}>5 Month</StyledOption>
                    <StyledOption value={6}>6 Month</StyledOption>
                    <StyledOption value={7}>7 Month</StyledOption>
                    <StyledOption value={8}>8 Month</StyledOption>
                    <StyledOption value={9}>9 Month</StyledOption>
                    <StyledOption value={10}>10 Month</StyledOption>
                    <StyledOption value={11}>11 Month</StyledOption>
                    <StyledOption value={12}>12 Month</StyledOption>
                    </CustomSelect>
                    
                    </div>
                </div>
                
                <div className="Info">
                    <div className="subInfo1">
                        Profit Rate (p.a)
                    </div>
                    <div className="subInfo2">
                        3.8%
                    </div>
                </div>
                <div className="Info">
                    <div className="subInfo1">
                        Maturity Date
                    </div>
                    <div className="subInfo2">
                        7 Feb 2022
                    </div>
                </div>
                <div className="Info">
                    <div className="subInfo1">
                        Profit Payment Mode
                    </div>
                    <div className="subInfo2DD">
                   
                   <CustomSelect>
                    <StyledOption value={1}>Add to Principal</StyledOption>
                    <StyledOption value={2}>Credit to Account</StyledOption>
                    </CustomSelect>

                    </div>
                </div>  

                <div className="Info">
                    <div className="subInfo1">
                        Instruction on Maturity
                    </div>
                    <div className="subInfo2DD">
                    <CustomSelect>
                    <StyledOption value={1}>Auto Renewal</StyledOption>
                    <StyledOption value={2}>Credit to Account</StyledOption>
                    </CustomSelect>

                    </div>
                </div>
                <div className="Info">
                    <div className="subInfo1">
                        Credit to Account
                    </div>
                    <div className="subInfo2DD">

                    <CustomSelect >
                    <div className="acc1">
                      <StyledOption value={1}><div className="account">SME First Account 
                      <div className="noacc"> 3101 2130 6725</div>
                      <div className="amount">RM 690,420.00</div></div>
                      </StyledOption>
                      </div>
                    
                      <div className="acc1">
                      <StyledOption value={2}><div className="account">SME First Account 
                      <div className="noacc"> 3101 2130 6725</div>
                      <div className="amount">RM 690,420.00</div></div>
                      </StyledOption>
                      </div>

                      <div className="acc1">
                      <StyledOption value={3}><div className="account">SME First Account 
                      <div className="noacc"> 3101 2130 6725</div>
                      <div className="amount">RM 690,420.00</div></div>
                      </StyledOption>
                      </div>

                      <div className="acc1">
                      <StyledOption value={4}><div className="account">SME First Account 
                      <div className="noacc"> 3101 2130 6725</div>
                      <div className="amount">RM 690,420.00</div></div>
                      </StyledOption>
                      </div>
{/*                     
                    <StyledOption value={2}>Payment Account</StyledOption>
                    <StyledOption value={3}>Payment Account 2</StyledOption>
                    <StyledOption value={4}>Payment Account 3</StyledOption> */}
                    </CustomSelect>

                    </div>
                </div>
                <div className="Info">
                    <div className="subInfo1">
                        Profit Payment Frequency
                    </div>
                    <div className="subInfo2DD">
                    <CustomSelect>
                    <StyledOption value={1}>Monthly</StyledOption>
                    <StyledOption value={2}>On Maturity</StyledOption>
                    <StyledOption value={3}>6 Months</StyledOption>
                    </CustomSelect>
                    </div>
                </div>

                <div className="terms">
                By clicking Done, you hereby agree to our <div className="conditions">Terms and Conditions</div> 
                </div>
            
            <div className="button">
                <div className="cancel">Cancel</div>
                <div className="save">Save Changes</div>
            </div>
        </div>
        </div>
        </>
    );
};

// export default Form;
