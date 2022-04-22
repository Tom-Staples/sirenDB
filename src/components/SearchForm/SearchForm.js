import React, { useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import SearchFormUI from './SearchFormUI';

const SearchForm = props => {
  const [searchData, setSearchData] = useState({
    model: 'selectModelName',
    size: 'selectModelSize',
    fabricType: 'selectFabricType',
    fabricName: 'selectFabricName'
  });
  let buttonStyle =
    searchData.model === 'selectModelName' ||
    searchData.size === 'selectModelSize' ||
    searchData.fabricType === 'selectFabricType' ||
    searchData.fabricName === 'selectFabricName'
      ? 'bg-gray-500'
      : 'bg-purple-700 hover:bg-purple-500';

  const [fabrics] = useFetchData(
    `https://siren-price-database.herokuapp.com/${props.supplier}Fabrics?fabricType=${searchData.fabricType}`,
    searchData.fabricType
  );

  const [models] = useFetchData(
    `https://siren-price-database.herokuapp.com/${props.supplier}Models?model=${searchData.model}`,
    searchData.model
  );

  const handleChange = e => {
    const { id, value } = e.target;
    if (id === 'model') {
      setSearchData({
        ...searchData,
        size: 'selectModelSize',
        [id]: value
      });
    } else if (id === 'fabricType') {
      setSearchData({
        ...searchData,
        fabricName: 'selectFabricName',
        [id]: value
      });
    } else {
      setSearchData({
        ...searchData,
        [id]: value
      });
    }
  };

  const modelNames = props.modelList.map((model, index) => {
    return (
      <option key={index} value={model.toLowerCase()}>
        {model}
      </option>
    );
  });

  const modelSizes = models.map((model, index) => {
    return (
      <option
        key={index}
        value={model.description}
      >{`${model.description} ( ${model.size} )`}</option>
    );
  });

  const fabricTypes = props.fabricTypes.map((type, index) => {
    return (
      <option key={index} value={type.toLowerCase()}>
        {type}
      </option>
    );
  });

  const fabricNames = fabrics.map((fabric, index) => {
    return (
      <option key={index} value={fabric.name}>
        {fabric.name}
      </option>
    );
  });

  const inputStyle = 'text-black rounded p-2 mb-10 mr-10 w-1/5';
  return (
    <SearchFormUI
      searchData={searchData}
      handleChange={handleChange}
      handleSubmit={props.handleSubmit}
      modelNames={modelNames}
      fabricNames={fabricNames}
      modelSizes={modelSizes}
      fabricTypes={fabricTypes}
      models={models}
      fabrics={fabrics}
      inputStyle={inputStyle}
      buttonStyle={buttonStyle}
    />
  );
};

export default SearchForm;
