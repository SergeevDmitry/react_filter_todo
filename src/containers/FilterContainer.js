import { connect } from 'react-redux';

import { setFilter } from '../actions';
import Filter from '../components/Filter';

function mapStateToProps(state) {
  return {
    activeFilter: state.filter
  }
}

function mapDispacthToProps(dispatch) {
  return {
    onSetFilter: filter => dispatch(setFilter(filter))
  }
}

const FilterContainer = connect(mapStateToProps, mapDispacthToProps)(Filter);

export default FilterContainer;
