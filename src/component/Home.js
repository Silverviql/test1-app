import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div className='container'>
                <div className="row" >
                    <p className="App-intro col-6">
                        В Евросоюзе согласовали продление индивидуальных санкций против России
                        Комитет постпредов стран ЕС обсудил ограничения, договорившись продлить их еще на полгода. Сейчас в санкционном списке фигурируют 155 человек и 44 организации.
                    </p>
                    <p className="App-intro col-6">
                        В Евросоюзе согласовали продление индивидуальных санкций против России
                        Комитет постпредов стран ЕС обсудил ограничения, договорившись продлить их еще на полгода. Сейчас в санкционном списке фигурируют 155 человек и 44 организации.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
