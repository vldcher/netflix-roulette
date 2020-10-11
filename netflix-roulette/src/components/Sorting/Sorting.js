import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, Menu, MenuItem  } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { selectSortedBy } from "../../store/actions/actionCreators";
import "./sorting.scss";

const Sorting = () => {

  const { list, selected } = useSelector((state) => state.sortBy);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = useCallback((e) => setAnchorEl(e.currentTarget));
  const handleClose = useCallback(() => setAnchorEl(null));
  const handleClick = useCallback(
    ({ target: { value } }) => {
      const selectedSort = list.find(({ code }) => value.toString() === code);
      dispatch(selectSortedBy(selectedSort));
      handleClose();
    },
    [list]
  );


  return (
    <div className="sorting">
      <label htmlFor="sorting__title">Sort by :</label>

      <FormControl>
        {list.length ? (
          <>
            <div onClick={handleOpen}>
              {list.find(({ code }) => code === selected.code).title}
              <ArrowDropDownIcon />
            </div>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              elevation={0}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              className="sorting__list"
            >
              {list.map((item) => (
                <MenuItem
                  key={item.code}
                  value={item.code}
                  onClick={handleClick}
                  className="sorting__list-item"
                >
                  {item.title}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : null}
      </FormControl>
    </div>
  );
};


export default Sorting;