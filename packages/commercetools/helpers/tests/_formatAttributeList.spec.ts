import  { formatAttributeList } from '../src/_utils'

describe('[commercetools-helpers] internal utilities helpers', () => {
  const attributeList = [
    { __typename: 'StringAttribute', stringValue: 'val', name: 'color', label: 'label' },
    { __typename: 'DateAttribute', dateValue: 'val', name: 'name' },
    { __typename: 'DateTimeAttribute', dateTimeValue: 'val', name: 'name' },
    { __typename: 'TimeAttribute', timeValue: 'val', name: 'name' },
    { __typename: 'NumberAttribute', numberValue: 'val', name: 'name' },
    { __typename: 'EnumAttribute', label: 'val', name: 'name' },
    { __typename: 'LocalizedEnumAttribute', localizedLabel: 'val', name: 'name' },
    { __typename: 'LocalizedStringAttribute', localizedString: 'val', name: 'name' },
    { __typename: 'MoneyAttribute', centAmount: 'val', name: 'name' },
    { __typename: 'BooleanAttribute', booleanValue: 'val', name: 'name' },
    { __typename: 'ReferenceAttribute', typeId: 'val', id: 'val', name: 'name' },
    { __typename: 'UnknownAttribute', value: 'val', name: 'name' }
  ]
  
  it('transforms custom value attribute fields to normalized "value" and copies "value" to "label" if it is empty', () => {
    const normalziedAttributeList = [
      { value: 'val', name: 'color', label: 'label'  },
      { value: 'val', name: 'name', label: 'val'  },
      { value: 'val', name: 'name', label: 'val'  },
      { value: 'val', name: 'name', label: 'val'  },
      { value: 'val', name: 'name', label: 'val'  },
      { value: 'val', name: 'name', label: 'val'  },
      { value: 'val', name: 'name', label: 'val'  },
      { value: 'val', name: 'name', label: 'val'  },
      { value: 'val', name: 'name', label: 'val'  },
      { value: 'val', name: 'name', label: 'val'  },
      { value: { typeId: 'val', id: 'val' }, name: 'name', label: null },
      { value: null, name: 'name', label: null  }
    ]
    expect(formatAttributeList(attributeList)).toEqual(normalziedAttributeList)
  })
})
