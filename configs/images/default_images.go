/*
Copyright 2022 Nethermind

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package clientsimages

import (
	_ "embed"

	"gopkg.in/yaml.v3"
)

//go:embed client_images.yaml
var clientImages string

type DefaultExecutionImages struct {
	GethImage       Image `yaml:"geth"`
	BesuImage       Image `yaml:"besu"`
	NethermindImage Image `yaml:"nethermind"`
	ErigonImage     Image `yaml:"erigon"`
}

func (dei DefaultExecutionImages) Geth() Image {
	return dei.GethImage
}

func (dei DefaultExecutionImages) Besu() Image {
	return dei.BesuImage
}

func (dei DefaultExecutionImages) Nethermind() Image {
	return dei.NethermindImage
}

func (dei DefaultExecutionImages) Erigon() Image {
	return dei.ErigonImage
}

type DefaultConsensusImages struct {
	LighthouseImage Image `yaml:"lighthouse"`
	LodestarImage   Image `yaml:"lodestar"`
	TekuImage       Image `yaml:"teku"`
	PrysmImage      Image `yaml:"prysm"`
}

func (dci DefaultConsensusImages) Lighthouse() Image {
	return dci.LighthouseImage
}

func (dci DefaultConsensusImages) Lodestar() Image {
	return dci.LodestarImage
}

func (dci DefaultConsensusImages) Teku() Image {
	return dci.TekuImage
}

func (dci DefaultConsensusImages) Prysm() Image {
	return dci.PrysmImage
}

type DefaultValidatorImages struct {
	LighthouseImage Image `yaml:"lighthouse"`
	LodestarImage   Image `yaml:"lodestar"`
	TekuImage       Image `yaml:"teku"`
	PrysmImage      Image `yaml:"prysm"`
}

func (dvi DefaultValidatorImages) Lighthouse() Image {
	return dvi.LighthouseImage
}

func (dvi DefaultValidatorImages) Lodestar() Image {
	return dvi.LodestarImage
}

func (dvi DefaultValidatorImages) Teku() Image {
	return dvi.TekuImage
}

func (dvi DefaultValidatorImages) Prysm() Image {
	return dvi.PrysmImage
}

type DefaultClientsImages struct {
	ExecutionImages DefaultExecutionImages `yaml:"execution"`
	ConsensusImages DefaultConsensusImages `yaml:"consensus"`
	ValidatorImages DefaultValidatorImages `yaml:"validator"`
}

func (dci DefaultClientsImages) Execution() ExecutionClientsImages {
	return dci.ExecutionImages
}

func (dci DefaultClientsImages) Consensus() ConsensusClientsImages {
	return dci.ConsensusImages
}

func (dci DefaultClientsImages) Validator() ValidatorClientsImages {
	return dci.ValidatorImages
}

func NewDefaultClientsImages() (ClientsImages, error) {
	dci := DefaultClientsImages{}

	err := yaml.Unmarshal([]byte(clientImages), &dci)
	if err != nil {
		return nil, err
	}

	return &dci, nil
}