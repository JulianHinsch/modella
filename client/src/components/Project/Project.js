import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Simulation from '../Simulation/Simulation';
import StockList from '../StockList/StockList';
import FlowList from '../FlowList/FlowList';
import SimulationList from '../SimulationList/SimulationList';

import styles from './Project.module.scss';

export default class Project extends Component {

    static propTypes = {

    }

    state = {
      stocks: [
        {
          id: 1,
          simulationId: 1,
          title: 'Here',
          unit: 'Gallons',
          initialValue: 100,
          value: 100,
        },
        {
          id: 1,
          simulationId: 1,
          title: 'There',
          unit: 'Gallons',
          initialValue: 100,
          value: 100,
        }
      ],
      flows: [
        {
          id: 1,
          simulationId: 1,
          toId: 1,
          toTitle: 'There',
          fromId: 2,
          fromTitle: 'Here',
          rate: 10,
          unit: 'Gallons',
          timeUnit: 'second',
        }
      ],
      simulations: [
        {
          time: 1,
          timeUnit: 'minute',
          id: 1,
          title: 'My Simulation',
        }
      ],
      currentSimulationId: null,
      isResizing: false,
      sidebarWidth: 300,
    }

    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('mouseup', this.endResize);

    }

    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('mouseup', this.endResize);
    }

    handleMouseMove = (e) => {
      const { isResizing } = this.state;
      if (isResizing) {
        this.setState({ sidebarWidth: Math.min(window.innerWidth - e.clientX, window.innerWidth-100) })
      }
    }

    startResize = (e) => {
      this.setState({ isResizing: true });
    }

    endResize = (e) => {
      this.setState({ isResizing: false });
    }

    render() {
        const {
          stocks,
          flows,
          simulations,
          currentSimulationId,
          sidebarWidth,
        } = this.state;
        const currentSimulation = simulations.filter((i) => i.id = currentSimulationId);
        return (
            <div className={styles.project}>
              <div
                className={styles.simulation_container}
                style={{ width: window.innerWidth - sidebarWidth}}>
                <Simulation
                  simulation={currentSimulation}
                  stocks={stocks}
                  flows={flows}
                />
              </div>
              <div
                className={styles.sidebar}
                style={{ width: sidebarWidth }}>
                <div
                  className={styles.resizable}
                  onMouseDown={this.startResize}/>
                <StockList stocks={stocks}/>
                <FlowList flows={flows}/>
                <SimulationList simulations={simulations}/>
              </div>
            </div>
        );
    }
}
