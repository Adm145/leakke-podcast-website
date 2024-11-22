import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export const DropDownMenu = ({options, onSelect, lable}) => {
  const [selectedOption, setSelectedOption] = React.useState(lable);

  const handleOptionClicked = (popupState, option) => {
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
          sx={{color: 'var(--light-gray)'}}
          >
            {selectedOption}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {options.map((option) => (
              <MenuItem
                key={option.value}
                onClick={() => handleOptionClicked(popupState, option)}
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
