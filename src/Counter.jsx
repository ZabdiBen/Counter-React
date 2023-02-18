import PropTypes from 'prop-types';

export const Counter = ({value}) => {
  return (
    <>
      <section class="text-white p-1">
         <div class="flex flex-col">
          <h1>Counter App</h1>
          <span>{value}</span>
          <button class="bg-white text-black w-1/3">Add 1+</button>
         </div>
      </section>
    </>
    )
}

Counter.propTypes = {
  title: PropTypes.number
}