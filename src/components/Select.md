Expected Input : Select component when options prop value is an non-empty array ([{value:string.html:string}])

```js
<Select
  options={[
    {
      value: "very high",
      html: "5",
    },
    {
      value: "high",
      html: "4",
    },
    {
      value: "medium",
      html: "3",
    },
    {
      value: "low",
      html: "2",
    },
    {
      value: "very low",
      html: "1",
    },
  ]}
></Select>
```

UnExpected Input : Select component when options prop value is an empty Array ([])

```js
<Select options={[]}></Select>
```
