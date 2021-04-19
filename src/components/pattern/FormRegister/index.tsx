import React, { useState } from 'react';

import { Label } from '@/components/forms/Label';
import { IHandleRadioButtonChangeEvent, RadioButton } from '@/components/forms/RadioButton';
import { IHandleInputChangeEvent, TextField } from '@/components/forms/TextField';
import { Grid } from '@/components/foundation/layout/Grid';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/commons/Button';

const paymentState = {
  TRANSFER: 'transfer',
  CARD: 'card',
  PAYPAL: 'paypal',
};

export function FormRegister() {
  const initialValues = {
    dataFrom: '',
    dateTo: '',
    source: '',
    destination: '',
    name: '',
    surname: '',
    country: '',
    birthdate: '',
    fiscalNumber: '',
    email: '',
    phoneNumber: '',
    paymentMethod: '',
  };
  const [travelInfo, setTravelInfo] = useState(initialValues);
  const [paymentMethod, setPaymentMethod] = useState(paymentState.CARD);

  function handleInputChange(e: IHandleInputChangeEvent) {
    const fieldName = e.target.getAttribute('name');
    const { value } = e.target;
    setTravelInfo((currentValues) => ({
      ...currentValues,
      [fieldName]: value,
    }));
  }

  function handleRadioButtonChange(e: IHandleRadioButtonChangeEvent) {
    const { id } = e.target;
    setPaymentMethod(id);
  }

  return (
    <form
      id="formRegister"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Grid.Row marginBottom="32px">
        <Grid.Column
          offset={{ xs: 0, md: 2 }}
          value={{ xs: 12, md: 3 }}
        >
          <Label>
            Data de saída
          </Label>
          <TextField
            name="dataFrom"
            value={travelInfo.dataFrom}
            onChange={handleInputChange}
          />
        </Grid.Column>

        <Grid.Column
          value={{ xs: 12, md: 3 }}
        >
          <Label>
            Data de retorno
          </Label>
          <TextField
            name="dateTo"
            value={travelInfo.dateTo}
            onChange={handleInputChange}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row marginBottom="32px">
        <Grid.Column
          offset={{ xs: 0, md: 2 }}
          value={{ xs: 12, md: 4 }}
        >
          <Label>
            Local de origem
          </Label>
          <TextField
            name="source"
            value={travelInfo.source}
            onChange={handleInputChange}
          />
        </Grid.Column>

        <Grid.Column
          value={{ xs: 12, md: 4 }}
        >
          <Label>
            Local de chegada
          </Label>
          <TextField
            name="destination"
            value={travelInfo.destination}
            onChange={handleInputChange}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row marginBottom="11px">
        <Grid.Column
          offset={{ xs: 0, md: 2 }}
        >
          <Text
            variant="subTitle"
            tag="span"
            color="secondary.main"
          >
            Como será o pagamento?
          </Text>
        </Grid.Column>

      </Grid.Row>
      <Grid.Row marginBottom="32px">
        <Grid.Column
          display="flex"
          offset={{ xs: 0, md: 2 }}
          value={{ xs: 12, md: 5 }}
        >
          <RadioButton
            id="transfer"
            name="paymentMethod"
            imageSrc="/images/money.png"
            checked={paymentMethod === paymentState.TRANSFER}
            onChange={handleRadioButtonChange}
          >
            Transferência
          </RadioButton>

          <RadioButton
            id="card"
            name="paymentMethod"
            imageSrc="/images/card.png"
            checked={paymentMethod === paymentState.CARD}
            onChange={handleRadioButtonChange}
          >
            Cartão
          </RadioButton>

          <RadioButton
            id="paypal"
            name="paymentMethod"
            imageSrc="/images/paypal.png"
            checked={paymentMethod === paymentState.PAYPAL}
            onChange={handleRadioButtonChange}
          >
            Pay Pal
          </RadioButton>

        </Grid.Column>
      </Grid.Row>

      <Grid.Row marginBottom="32px">
        <Grid.Column
          offset={{ xs: 0, md: 2 }}
        >
          <Text
            variant="subTitle"
            tag="span"
            color="secondary.main"
          >
            Quem vai viajar
          </Text>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row marginBottom="32px">
        <Grid.Column
          offset={{ xs: 0, md: 2 }}
          value={{ xs: 12, md: 8 }}
        >
          <Label>
            Nome
          </Label>
          <TextField
            name="name"
            value={travelInfo.name}
            onChange={handleInputChange}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row marginBottom="32px">
        <Grid.Column
          offset={{ xs: 0, md: 2 }}
          value={{ xs: 12, md: 8 }}
        >
          <Label>
            Sobrenome
          </Label>
          <TextField
            name="surname"
            value={travelInfo.surname}
            onChange={handleInputChange}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row marginBottom="32px">
        <Grid.Column
          offset={{ xs: 0, md: 2 }}
          value={{ xs: 12, md: 4 }}
        >
          <Label>
            País de residência
          </Label>
          <TextField
            name="country"
            value={travelInfo.country}
            onChange={handleInputChange}
          />
        </Grid.Column>

        <Grid.Column
          offset={{ xs: 0, md: 0 }}
          value={{ xs: 12, md: 4 }}
        >
          <Label>
            Data de Nascimento
          </Label>
          <TextField
            name="birthdate"
            value={travelInfo.birthdate}
            onChange={handleInputChange}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row marginBottom="32px">
        <Grid.Column
          offset={{ xs: 0, md: 2 }}
          value={{ xs: 12, md: 8 }}
        >
          <Label>
            CPF
          </Label>
          <TextField
            name="fiscalNumber"
            placeholder="000.000.000-00"
            value={travelInfo.fiscalNumber}
            onChange={handleInputChange}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row marginBottom="32px">
        <Grid.Column
          offset={{ xs: 0, md: 2 }}
          value={{ xs: 12, md: 8 }}
        >
          <Label>
            Email
          </Label>
          <TextField
            name="email"
            value={travelInfo.email}
            onChange={handleInputChange}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row marginBottom="32px">
        <Grid.Column
          offset={{ xs: 0, md: 2 }}
          value={{ xs: 12, md: 8 }}
        >
          <Label>
            Telefone
          </Label>
          <TextField
            name="phoneNumber"
            placeholder="(__)_____-____"
            value={travelInfo.phoneNumber}
            onChange={handleInputChange}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row marginBottom="32px">
        <Grid.Column
          offset={{ xs: 0, md: 2 }}
          value={{ xs: 12, md: 3 }}
        >
          <Button
            variant="primary.main"
            margin={{
              xs: '0 auto',
              md: 'initial',
            }}
            fullWidth
          >
            Comprar
          </Button>
        </Grid.Column>
      </Grid.Row>

    </form>
  );
}
