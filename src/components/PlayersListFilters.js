import React from 'react';
import { connect } from 'react-redux';
import { setFilterText, setFilterType, sortByName, sortBySkill } from '../actions/filters';

const PlayersListFilters = (props) => (
    <div className="players-list-filters">
        <h2>Filter Players</h2>
        <div class="filter-group">
            <label>Search For:</label><br />
            <input type="text" value={props.filters.text} onChange={(e) => {
                props.dispatch(setFilterText(e.target.value));
            }} />
        </div>
        <div class="filter-group">
            <label>Sort By:</label><br />
            <select onChange={(e) => {
                if (e.target.value === "name") {
                    props.dispatch(sortByName());
                }
                else if (e.target.value === "skill_level") {
                    props.dispatch(sortBySkill());
                }
            }}>
                <option value="name">Name</option>
                <option value="skill_level">Skill Level</option>
            </select>
        </div>
        <div class="filter-group">
            <label>Sport Type:</label><br />
            <select onChange={(e) => {
                props.dispatch(setFilterType(e.target.value));
            }}>
                <option value="all">All</option>
                <option value="hockey">Hockey</option>
                <option value="baseball">Baseball</option>
                <option value="softball">Softball</option>
                <option value="basketball">Basketball</option>
            </select>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(PlayersListFilters);