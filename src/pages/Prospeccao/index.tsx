import React, { useState } from 'react';
import { Users, Building2, MessageSquare, Phone, Mail, MapPin, Map, HelpCircle, Search } from 'lucide-react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  Container,
  Header,
  FormContainer,
  FormGrid,
  MainContent,
  ProfileSelector,
  ProfileOption,
  ContactChannels,
  Channel,
  LocationTabs,
  LocationTab,
  LocationContent,
  RegionGrid,
  RegionOption,
  SearchableList,
  MapContainer,
  Footer,
} from './styles';

type ProfileType = 'consumer' | 'business';
type LocationTab = 'popular' | 'states' | 'regions' | 'map';

export const Prospecting = () => {
  const [profile, setProfile] = useState<ProfileType>('consumer');
  const [activeLocationTab, setActiveLocationTab] = useState<LocationTab>('popular');
  const [searchTerm, setSearchTerm] = useState('');

  const popularLocations = [
    'São Paulo - Grande São Paulo',
    'São Paulo - Interior',
    'São Paulo - Litoral',
    'Rio de Janeiro - Capital',
    'Rio de Janeiro - Grandes Lagos',
    'Minas Gerais - Belo Horizonte',
    'Bahia - Salvador',
    'Distrito Federal',
  ];

  const regions = [
    'Sudeste',
    'Sul',
    'Norte',
    'Nordeste',
    'Centro-oeste',
  ];

  const states = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espírito Santo',
    'Paraná',
    'Santa Catarina',
    'Rio Grande do Sul',
    // Add more states
  ];

  return (
    <Container>
      <Header>
        <h1>Nova Prospecção</h1>
      </Header>

      <FormContainer>
        <FormGrid>
          <MainContent>
            <div>
              <Input
                icon={Users}
                label="Nome da prospecção"
                placeholder="Digite um nome para identificar esta prospecção"
                required
              />

              <ProfileSelector>
                <h3>Perfil</h3>
                <div>
                  <ProfileOption
                    type="button"
                    $active={profile === 'consumer'}
                    onClick={() => setProfile('consumer')}
                  >
                    <Users size={20} />
                    Consumidores
                  </ProfileOption>
                  <ProfileOption
                    type="button"
                    $active={profile === 'business'}
                    onClick={() => setProfile('business')}
                  >
                    <Building2 size={20} />
                    Empresas
                  </ProfileOption>
                </div>
              </ProfileSelector>

              <ContactChannels>
                <h3>Canal para contato</h3>
                <div>
                  <Channel>
                    <input type="checkbox" id="sms" />
                    <label htmlFor="sms">
                      <MessageSquare size={20} />
                      SMS / WhatsApp
                    </label>
                  </Channel>
                  <Channel>
                    <input type="checkbox" id="call" />
                    <label htmlFor="call">
                      <Phone size={20} />
                      Call center
                    </label>
                  </Channel>
                  <Channel>
                    <input type="checkbox" id="email" />
                    <label htmlFor="email">
                      <Mail size={20} />
                      E-mail
                    </label>
                  </Channel>
                  <Channel>
                    <input type="checkbox" id="mail" />
                    <label htmlFor="mail">
                      <MapPin size={20} />
                      Mala direta
                    </label>
                  </Channel>
                </div>
              </ContactChannels>

              <div>
                <h3>Localização</h3>
                <LocationTabs>
                  <LocationTab
                    $active={activeLocationTab === 'popular'}
                    onClick={() => setActiveLocationTab('popular')}
                  >
                    <HelpCircle size={20} />
                    Mais pesquisadas
                  </LocationTab>
                  <LocationTab
                    $active={activeLocationTab === 'states'}
                    onClick={() => setActiveLocationTab('states')}
                  >
                    <MapPin size={20} />
                    Estados / Cidades
                  </LocationTab>
                  <LocationTab
                    $active={activeLocationTab === 'regions'}
                    onClick={() => setActiveLocationTab('regions')}
                  >
                    <Map size={20} />
                    Regiões
                  </LocationTab>
                </LocationTabs>

                <LocationContent>
                  {activeLocationTab === 'popular' && (
                    <RegionGrid>
                      {popularLocations.map((location) => (
                        <RegionOption key={location}>
                          <input type="checkbox" id={location} />
                          <label htmlFor={location}>{location}</label>
                        </RegionOption>
                      ))}
                    </RegionGrid>
                  )}

                  {activeLocationTab === 'states' && (
                    <SearchableList>
                      <Input
                        label=''
                        icon={Search}
                        placeholder="Buscar estado ou cidade..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <div className="list">
                        {states.map((state) => (
                          <RegionOption key={state}>
                            <input type="checkbox" id={state} />
                            <label htmlFor={state}>{state}</label>
                          </RegionOption>
                        ))}
                      </div>
                    </SearchableList>
                  )}

                  {activeLocationTab === 'regions' && (
                    <RegionGrid>
                      {regions.map((region) => (
                        <RegionOption key={region}>
                          <input type="checkbox" id={region} />
                          <label htmlFor={region}>{region}</label>
                        </RegionOption>
                      ))}
                    </RegionGrid>
                  )}
                </LocationContent>
              </div>
            </div>

            <Footer>
              <Button variant="secondary" onClick={() => window.history.back()}>
                Voltar
              </Button>
              <Button>
                Seguir
              </Button>
            </Footer>
          </MainContent>
        </FormGrid>
      </FormContainer>
    </Container>
  );
};