import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
        <div>
            <section className="description-pokemon">
                <p>{ name }</p>
                <p>{ type }</p>
                <p>{ averageWeight.value }{ averageWeight.measurementUnit }</p>
            </section>

            <section className="image-pokemon">
                <img src={ image } alt="imagem do pokemon selecionado" />
            </section>
        </div>
    );
    }
}
Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        averageWeight: PropTypes.shape({
            value:PropTypes.number,
            measurementUnit: PropTypes.string}.isRequired),
        image: PropTypes.string.isRequired,
    })
}
export default Pokemon