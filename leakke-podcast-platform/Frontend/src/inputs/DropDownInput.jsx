import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const DropDownInput = ({options, onSelect, lable}) => {
  const [selectedOption, setSelectedOption] = React.useState(lable);

  const handleoptionClicked = (popupState, option) => {
    setSelectedOption(option.label)
    onSelect(option.value)
    popupState.close();
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button 
          variant="text" 
          {...bindTrigger(popupState)}
          sx={{size: 'medium'}}
          >
            {selectedOption}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {options.map((option) => (
              <MenuItem
                key={option.value}
                onClick={() => handleoptionClicked(popupState, option)}
              >
                {option.label}
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default DropDownInput;