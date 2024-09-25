import { FormattedDate, FormattedNumber } from "react-intl";
import React from "react";

const Job = (props) => {

  const language = navigator.language;

  const isSpanish = language.startsWith('es');
  const label = props.offer.salary === 1 ? (isSpanish ? 'millón' : 'million') : (isSpanish ? 'millones' : 'million');

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>
        {props.offer.name}
      </td>
      <td>
        {props.offer.company}
      </td>
      <td>
        <FormattedNumber
          value={props.offer.salary}
          // eslint-disable-next-line
          style="decimal"
          minimumFractionDigits={0} 
          maximumFractionDigits={2}
        /> {label}
      </td>
      <td>
        {props.offer.city}
      </td>
      <td>
        <FormattedNumber
          value={props.offer.views}
          // eslint-disable-next-line
          style="decimal"
          minimumFractionDigits={0} 
          maximumFractionDigits={0}
        />
      </td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
    </tr>
  );
};

export default Job;
