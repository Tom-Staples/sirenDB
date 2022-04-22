const SearchFormUI = props => {
  return (
    <form
      className='flex flex-wrap w-4/5 mx-auto mt-20 bg-gray-700 p-10 rounded text-center justify-between'
      onSubmit={e => {
        props.handleSubmit(e, props.models, props.fabrics, props.searchData);
      }}
    >
      <select
        className={props.inputStyle}
        onChange={props.handleChange}
        value={props.searchData.model.toLowerCase()}
        id='model'
      >
        <option value='selectModelName'>---Select Model Name---</option>
        {props.modelNames}
      </select>
      <select
        className={props.inputStyle}
        id='size'
        onChange={props.handleChange}
        value={props.searchData.size}
        disabled={props.searchData.model === 'selectModelName'}
      >
        <option value='selectModelSize'>---Select Model Size---</option>
        {props.modelSizes}
      </select>
      <select
        className={props.inputStyle}
        id='fabricType'
        onChange={props.handleChange}
        value={props.searchData.fabricType}
        disabled={
          props.searchData.model === 'selectModelName' ||
          props.searchData.size === 'selectModelSize'
        }
      >
        <option value='selectFabricType'>
          ---Select Fabric / Leather Type---
        </option>
        {props.fabricTypes}
      </select>
      <select
        className={props.inputStyle}
        id='fabricName'
        onChange={props.handleChange}
        value={props.searchData.fabricName}
        disabled={
          props.searchData.model === 'selectModelName' ||
          props.searchData.size === 'selectModelSize' ||
          props.searchData.fabricType === 'selectFabricType'
        }
      >
        <option value='selectFabricName'>
          ---Select Fabric / Leather Name---
        </option>
        {props.fabricNames}
      </select>
      <button
        className={`rounded px-6 py-2 w-1/5 mx-auto mt-10 ${props.buttonStyle}`}
        disabled={props.buttonStyle === 'bg-gray-500'}
      >
        Calculate Price
      </button>
    </form>
  );
};

export default SearchFormUI;
