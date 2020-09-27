import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { OpenWeatherResponse } from '../../interface/types';
import { Temperature } from '../../components';
import './CurrentWeather.css';
import { covertUnixToDate } from '../../utils/TimeConverter';

interface CurrentWeatherProps {
  weatherData: OpenWeatherResponse;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  weatherData,
}: CurrentWeatherProps) => {
  return (
    <Container className='vertical-center' fluid>
      <Card className='text-center weather-card'>
        <Card.Header>
          <h4>
            <strong> Weather forecast</strong>
          </h4>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <h5>{covertUnixToDate(weatherData.current.dt)}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>
                <Temperature temp={weatherData.current.temp} />
              </h2>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>morning</Col>
            <Col>day</Col>
            <Col>night</Col>
          </Row>
          <Row>
            <Col>
              <Temperature temp={weatherData.daily[0].temp.morn} />
            </Col>
            <Col>
              <Temperature temp={weatherData.daily[0].temp.day} />
            </Col>
            <Col>
              <Temperature temp={weatherData.daily[0].temp.night} />
            </Col>
          </Row>
          <Row>
            <Col>
              <small>{weatherData.timezone}</small>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CurrentWeather;
