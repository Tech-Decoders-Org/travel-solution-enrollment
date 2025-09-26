import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Upload, CheckCircle, FileText, Globe } from "lucide-react";
import tdLogo from "@/assets/td-logo.jpg";

interface EnrollmentFormProps {
  onBack: () => void;
}

type Destination = "russia" | "canada" | "germany" | "";

interface FormData {
  // Données communes
  destination: Destination;

  // Données pour la Russie
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  fatherFirstName?: string;
  fatherLastName?: string;
  motherFirstName?: string;
  motherLastName?: string;
  passport?: File;
  studyProject?: string;
  lastDiploma?: string;
  nationalId?: File;
  academicLevel?: string;
  desiredField?: string;

  // Données pour Canada/Allemagne
  marriageCertificate?: File;
  personalBirthCertificate?: File;
  childrenBirthCertificates?: File[];
  passportCanadaGermany?: File;
}

export function EnrollmentForm({ onBack }: Readonly<EnrollmentFormProps>) {
  const [formData, setFormData] = useState<FormData>({ destination: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>(
    {}
  );

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, file: File) => {
    setUploadedFiles((prev) => ({ ...prev, [field]: file.name }));
    // Simulate file upload
    console.log(`Uploaded ${file.name} for ${field}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
  };

  const resetForm = () => {
    setFormData({ destination: "" });
    setIsSubmitted(false);
    setUploadedFiles({});
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full w-fit">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-600">
              Inscription soumise avec succès !
            </CardTitle>
            <CardDescription className="text-lg">
              Merci pour votre pré-inscription. Notre équipe examinera votre
              dossier et vous contactera dans les 24-48 heures.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">
                Prochaines étapes :
              </h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Vérification de votre dossier (24-48h)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Contact téléphonique pour un entretien</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Accompagnement personnalisé selon votre projet</span>
                </li>
              </ul>
            </div>

            <div className="text-center space-y-4">
              <p className="text-gray-600">
                Destination choisie :{" "}
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-700"
                >
                  {formData.destination === "russia"
                    ? "🇷🇺 Russie"
                    : formData.destination === "canada"
                    ? "🇨🇦 Canada"
                    : "🇩🇪 Allemagne"}
                </Badge>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={resetForm} variant="outline">
                  Nouvelle inscription
                </Button>
                <Button
                  onClick={onBack}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Retour à l'accueil
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-gray-600 hover:text-purple-600 rounded-full hover:bg-purple-100"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour
            </Button>

            <div className="flex items-center space-x-3">
              <img src={tdLogo} alt="Logo" className="h-8 w-8" />
              {/* <span className="font-semibold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Travel Solution Plus
              </span> */}
            </div>
            <div></div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Formulaire de Pré-enrôlement
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Commencez votre processus d'émigration en quelques étapes simples
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Sélection de destination */}
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-purple-600" />
                <span>Choisissez votre destination</span>
              </CardTitle>
              <CardDescription>
                Sélectionnez le pays vers lequel vous souhaitez émigrer
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    value: "russia",
                    flag: "🇷🇺",
                    name: "Russie",
                    description: "Études et formation",
                  },
                  {
                    value: "canada",
                    flag: "🇨🇦",
                    name: "Canada",
                    description: "Immigration familiale",
                  },
                  {
                    value: "germany",
                    flag: "🇩🇪",
                    name: "Allemagne",
                    description: "Immigration familiale",
                  },
                ].map((destination) => (
                  <label key={destination.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="destination"
                      value={destination.value}
                      checked={formData.destination === destination.value}
                      onChange={(e) =>
                        handleInputChange(
                          "destination",
                          e.target.value as Destination
                        )
                      }
                      className="sr-only"
                    />
                    <div
                      className={`p-4 border-2 rounded-lg transition-all ${
                        formData.destination === destination.value
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2">{destination.flag}</div>
                        <h3 className="font-semibold text-gray-900">
                          {destination.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {destination.description}
                        </p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Formulaire pour la Russie */}
          {formData.destination === "russia" && (
            <Card className="border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🇷🇺</span>
                  <span>Informations pour la Russie</span>
                </CardTitle>
                <CardDescription>
                  Formulaire spécifique pour les études en Russie
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Informations personnelles */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      placeholder="Votre prénom"
                      value={formData.firstName || ""}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      placeholder="Votre nom"
                      value={formData.lastName || ""}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthDate">Date de naissance *</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate || ""}
                    onChange={(e) =>
                      handleInputChange("birthDate", e.target.value)
                    }
                    required
                  />
                </div>

                {/* Informations des parents */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Informations des parents
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fatherFirstName">Prénom du père *</Label>
                      <Input
                        id="fatherFirstName"
                        placeholder="Prénom du père"
                        value={formData.fatherFirstName || ""}
                        onChange={(e) =>
                          handleInputChange("fatherFirstName", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fatherLastName">Nom du père *</Label>
                      <Input
                        id="fatherLastName"
                        placeholder="Nom du père"
                        value={formData.fatherLastName || ""}
                        onChange={(e) =>
                          handleInputChange("fatherLastName", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="motherFirstName">
                        Prénom de la mère *
                      </Label>
                      <Input
                        id="motherFirstName"
                        placeholder="Prénom de la mère"
                        value={formData.motherFirstName || ""}
                        onChange={(e) =>
                          handleInputChange("motherFirstName", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motherLastName">Nom de la mère *</Label>
                      <Input
                        id="motherLastName"
                        placeholder="Nom de la mère"
                        value={formData.motherLastName || ""}
                        onChange={(e) =>
                          handleInputChange("motherLastName", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Projet d'étude */}
                <div className="space-y-2">
                  <Label htmlFor="studyProject">
                    Projet d'étude en Russie *
                  </Label>
                  <Textarea
                    id="studyProject"
                    placeholder="Décrivez ce que vous souhaitez faire en Russie (études, travail, etc.)"
                    value={formData.studyProject || ""}
                    onChange={(e) =>
                      handleInputChange("studyProject", e.target.value)
                    }
                    rows={4}
                    required
                  />
                </div>

                {/* Éducation */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="academicLevel">
                      Niveau académique actuel *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("academicLevel", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sélectionnez votre niveau" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bac">Baccalauréat</SelectItem>
                        <SelectItem value="bac+1">Bac +1</SelectItem>
                        <SelectItem value="bac+2">Bac +2</SelectItem>
                        <SelectItem value="bac+3">Bac +3 (Licence)</SelectItem>
                        <SelectItem value="bac+4">Bac +4</SelectItem>
                        <SelectItem value="bac+5">Bac +5 (Master)</SelectItem>
                        <SelectItem value="phd">Doctorat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="desiredField">Filière souhaitée *</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("desiredField", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choisissez une filière" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Ingénierie</SelectItem>
                        <SelectItem value="medicine">Médecine</SelectItem>
                        <SelectItem value="business">
                          Commerce/Gestion
                        </SelectItem>
                        <SelectItem value="it">Informatique</SelectItem>
                        <SelectItem value="arts">Arts et Lettres</SelectItem>
                        <SelectItem value="sciences">Sciences</SelectItem>
                        <SelectItem value="economics">Économie</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastDiploma">Dernier diplôme obtenu *</Label>
                  <Input
                    id="lastDiploma"
                    placeholder="Ex: Baccalauréat série S, Licence en Informatique..."
                    value={formData.lastDiploma || ""}
                    onChange={(e) =>
                      handleInputChange("lastDiploma", e.target.value)
                    }
                    required
                  />
                </div>

                {/* Documents */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Documents requis
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Passeport *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors">
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) =>
                            e.target.files &&
                            handleFileUpload("passport", e.target.files[0])
                          }
                          className="sr-only"
                          id="passport-upload"
                        />
                        <label
                          htmlFor="passport-upload"
                          className="cursor-pointer"
                        >
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            {uploadedFiles.passport ||
                              "Télécharger le passeport"}
                          </p>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Carte nationale d'identité *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors">
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) =>
                            e.target.files &&
                            handleFileUpload("nationalId", e.target.files[0])
                          }
                          className="sr-only"
                          id="nationalId-upload"
                        />
                        <label
                          htmlFor="nationalId-upload"
                          className="cursor-pointer"
                        >
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            {uploadedFiles.nationalId || "Télécharger la CNI"}
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Formulaire pour Canada/Allemagne */}
          {(formData.destination === "canada" ||
            formData.destination === "germany") && (
            <Card className="border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">
                    {formData.destination === "canada" ? "🇨🇦" : "🇩🇪"}
                  </span>
                  <span>
                    Informations pour{" "}
                    {formData.destination === "canada"
                      ? "le Canada"
                      : "l'Allemagne"}
                  </span>
                </CardTitle>
                <CardDescription>
                  Formulaire pour l'immigration familiale
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Documents requis pour l'immigration familiale
                  </h3>
                  <p className="text-sm text-blue-700">
                    Veuillez préparer tous les documents pour les deux conjoints
                    et tous les enfants.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Documents obligatoires
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Acte de mariage (des deux conjoints) *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors">
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) =>
                            e.target.files &&
                            handleFileUpload(
                              "marriageCertificate",
                              e.target.files[0]
                            )
                          }
                          className="sr-only"
                          id="marriage-upload"
                        />
                        <label
                          htmlFor="marriage-upload"
                          className="cursor-pointer"
                        >
                          <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            {uploadedFiles.marriageCertificate ||
                              "Télécharger l'acte de mariage"}
                          </p>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Passeport *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors">
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) =>
                            e.target.files &&
                            handleFileUpload(
                              "passportCanadaGermany",
                              e.target.files[0]
                            )
                          }
                          className="sr-only"
                          id="passport-ca-de-upload"
                        />
                        <label
                          htmlFor="passport-ca-de-upload"
                          className="cursor-pointer"
                        >
                          <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            {uploadedFiles.passportCanadaGermany ||
                              "Télécharger le passeport"}
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Acte de naissance personnel *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) =>
                          e.target.files &&
                          handleFileUpload(
                            "personalBirthCertificate",
                            e.target.files[0]
                          )
                        }
                        className="sr-only"
                        id="birth-upload"
                      />
                      <label htmlFor="birth-upload" className="cursor-pointer">
                        <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          {uploadedFiles.personalBirthCertificate ||
                            "Télécharger votre acte de naissance"}
                        </p>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Actes de naissance des enfants</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        onChange={(e) => {
                          if (e.target.files) {
                            Array.from(e.target.files).forEach((file) => {
                              handleFileUpload(`childBirth_${file.name}`, file);
                            });
                          }
                        }}
                        className="sr-only"
                        id="children-birth-upload"
                      />
                      <label
                        htmlFor="children-birth-upload"
                        className="cursor-pointer"
                      >
                        <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          Télécharger les actes de naissance des enfants
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          (Facultatif si pas d'enfants)
                        </p>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-2">
                    Information importante
                  </h3>
                  <p className="text-sm text-amber-700">
                    Tous les documents doivent être traduits en{" "}
                    {formData.destination === "canada"
                      ? "français ou anglais"
                      : "allemand"}
                    par un traducteur assermenté. Notre équipe peut vous
                    accompagner dans cette démarche.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Bouton de soumission */}
          {formData.destination && (
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-12"
              >
                Soumettre ma demande
              </Button>
              <p className="text-sm text-gray-500 mt-2">
                En soumettant ce formulaire, vous acceptez d'être contacté par
                notre équipe
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
