import Select from 'react-select'

export const DesktopCountrySelector = ({ countryOptions }: any) => {
  return (
    <div className='w-48 hidden md:block'>
      <Select
        styles={{
          control: provided => ({
            ...provided,
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
          }),
          singleValue: provided => ({
            ...provided,
            color: 'white',
          }),
          placeholder: provided => ({
            ...provided,
            color: 'white',
          }),
          menu: provided => ({
            ...provided,
            backgroundColor: '#525965',
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#525965' : '#525965',
            color: state.isSelected ? 'white' : 'white',
            '&:hover': {
              backgroundColor: '#6b7280',
            },
          }),
        }}
        options={countryOptions}
        placeholder='Select Country'
      />
    </div>
  )
}
