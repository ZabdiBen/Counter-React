import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle}) => {
  
  /*
  Se puede llamar al fragment o colocar <> </>
  */
  
  return (
    <>
    <h1> {title}  zabdiel  </h1>
    <h2> {subtitle} </h2>
    </>
    )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title : 'titulo por defecto ',
  subtitle : 'Segundo titulo por defecto '
}