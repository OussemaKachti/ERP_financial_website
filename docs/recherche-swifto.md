# Étude de swifto.io — idées pour le site RFIDIA

Relevé du 3 octobre 2026 sur [swifto.io](https://www.swifto.io/index.html) : page d'accueil lue en entier, puis la structure (titres et sections) de 24 pages : fonctionnalités, solutions par métier, tarifs, à propos, témoignages, FAQ, contact, démo, confidentialité, comparatifs, glossaire, blog et presse.

Notre point de départ : trois applications (Finance, CRM, RH) avec un seul compte, alors que Swifto découpe son ERP en 14 modules. Pour chaque idée, la colonne « Pour RFIDIA » dit ce qu'on en fait.

## 1. Ce que Swifto fait bien

| Idée observée chez Swifto | Où | Pour RFIDIA |
|---|---|---|
| Une promesse de réassurance sous les boutons : « Accès démo 14 jours · Sans carte bancaire · Sans engagement » | Accueil, hero | **Gardé** : nous avons déjà « Sans installation · Essai gratuit · Mensuel ou annuel », placé au même endroit. |
| Fausse interface animée dans le hero (cartes CA, encaissé, notifications « Facture encaissée », « Tournée synchronisée ») | Accueil | **Adapté** : nos vraies captures et la vidéo, avec des notifications tirées des vrais flux (devis CRM → Finance, paie → écriture). |
| Bandeau de logos clients « Ils pilotent leur activité avec Swifto » | Accueil | **Non** : nous n'avons pas de logos publiables. On ne les invente pas. |
| Section « Chaque responsable y trouve son levier » : CEO, DAF, expert-comptable, directeur commercial, RH, chacun avec ses 3 indicateurs | Accueil, PME | **Repris** : nouvelle section « Votre rôle » avec dirigeant, DAF/comptable, directeur commercial et responsable RH, reliée à nos 3 applications. |
| Chiffres clés (500+ entreprises, 14 modules, 100 % conforme) | Accueil | **Repris avec prudence** : « 600+ entreprises » est un chiffre provisoire donné par l'équipe, centralisé dans `site.config.ts` pour être corrigé. |
| Une page par module, toujours construite pareil : douleur (« Combien d'affaires perdez-vous faute de suivi ? »), 3 bénéfices, 3 sections illustrées, rôle concerné, FAQ du module, modules connectés, comparatif, appel à l'action | Fonctionnalités | **Repris** sur nos 3 pages Finance / CRM / RH : ajout de la question-douleur d'ouverture, de la FAQ par module et du bloc « relié aux autres applications ». |
| Section « Ce qui vous fait perdre du temps et de l'argent aujourd'hui » en 6 douleurs (Excel partout, aucune visibilité, outils déconnectés…) | Solution PME | **Déjà présent** sous la forme « Aujourd'hui / Avec RFIDIA » ; mis plus haut et rendu plus visuel. |
| Pages « Solutions par métier » (PME, industrie, distribution, commerce, services, BTP, cabinets comptables) | Solutions | **Repris pour nos vrais publics** : négoce et distribution, sociétés de services, équipes commerciales terrain, plus une page **Cabinets et experts-comptables** (multi-société). Pas d'industrie ni de BTP : nous n'avons pas la production. |
| « Interface trilingue », langue par utilisateur, arabe de droite à gauche | Accueil | **Déjà notre force** : FR / ع pour Finance et RH. Mis en avant avec la capture arabe. |
| « Pourquoi Swifto » : conformité locale, déploiement rapide, support local, données sécurisées | Accueil | **Repris** sous forme de page **Sécurité et confiance** et d'un bloc de 4 engagements. |
| FAQ longue rangée par thèmes (général, modules, conformité, mobile, déploiement, sécurité, tarifs, support) | FAQ | **Repris** : page FAQ complète, par thèmes. |
| Tarifs : packs + « composez votre formule à la carte » + « ce qui est inclus » + « un investissement qui se rentabilise vite » | Tarifs | **Partiellement** : notre page tarifs existe ; ajout d'un comparatif détaillé et d'un simulateur « combien vous coûte la ressaisie ». |
| Page Contact avec adresse, téléphone, e-mail, horaires | Contact | **Repris** avec nos vraies coordonnées (Hannibal Park, Ariana). |
| Démo en 3 étapes : « vous recevez vos identifiants, vous vous connectez, vous testez » | Démo | **Repris** : le parcours après la demande est expliqué sur notre page démonstration. |
| Comparatifs (vs Odoo, Sage, Swiver…), glossaire, blog SEO de 30+ articles, presse | Ressources | **Plus tard** : demande du contenu éditorial suivi. On prépare seulement la structure (lien « Ressources » non publié). |
| Assistant IA « posez vos questions en langage naturel » | Swifto IA | **Notre équivalent existe** : la recherche des visites en langage courant dans le CRM et la lecture des factures fournisseur. On le montre, sans parler de « chatbot ». |
| Facture électronique El Fatoora (TTN) | Page dédiée | **Non** tant que la fonction n'existe pas chez nous : on ne promet que ce qui fonctionne. |

## 2. Ce que Swifto fait moins bien, et notre ouverture

- **Tout le monde dit la même chose** : « ERP tout-en-un », « temps réel », « conforme ». Les titres de Swifto pourraient être ceux de n'importe quel éditeur. RFIDIA doit gagner par les mots : parler de millime, de gouvernorat, de cachet « Bon à payer », de WhatsApp, de fin de mois.
- **14 modules, c'est un catalogue** : le visiteur doit deviner ce dont il a besoin. Nos 3 applications se comprennent en 5 secondes. On le revendique.
- **Le lien entre modules est affirmé, pas montré.** Chez nous il se voit : le devis de la visite devient une facture, la paie devient une écriture. C'est notre preuve centrale, montrée en vidéo et en animation.
- **Interface simulée** dans le hero de Swifto. Nous montrons de vraies captures et une vraie vidéo, en petit nombre.
- **Couleur générique** (violet SaaS). Notre identité tire de l'anneau tricolore du logo et d'une référence que le public reconnaît.

## 3. Captures : peu, et bien choisies

Swifto répète les maquettes. Nous limitons les captures réelles à **7 au total sur l'accueil** (dont 3 dans le hero), chacune choisie pour une preuve précise :

| Capture | Preuve |
|---|---|
| f-dashboard | Le dirigeant voit son mois en ouvrant l'application |
| c-visite | La visite terrain confirmée par GPS |
| r-paie | La paie calculée avant de générer le bulletin |
| f-factfourn | La facture fournisseur lue automatiquement |
| a-dashboard | L'interface en arabe, de droite à gauche |
| f-facture | Le document envoyé au client |
| c-carte | L'activité commerciale par gouvernorat |

Les pages module en gardent 3 ou 4 chacune. Le reste du récit passe par la vidéo.

## 4. La vidéo commerciale

Source : `rfidia-commercial/out/rfidia-commercial.mp4`, 1 min 37 s, avec bande-son.

- **Accueil** : extrait muet en boucle (le moment « Et si tout était enfin connecté ? » jusqu'au logo) dans une section plein cadre, puis bouton « Voir le film (1 min 37) » qui ouvre la version complète avec le son.
- **Pages module** : pas de vidéo, pour garder les pages légères.
- Encodage web en deux tailles (1080p et 720p), image d'attente, et chargement seulement quand la section approche de l'écran.

## 5. Nouvelles pages prévues

1. Accueil refondu.
2. Finance, CRM, RH enrichies (douleur, rôles, FAQ du module, applications reliées).
3. **Solutions** : négoce et distribution, services, équipes terrain, cabinets comptables.
4. **Sécurité et confiance**.
5. **FAQ** complète.
6. **Contact** avec les vraies coordonnées.
7. **À propos** de RFIDIA Technology (court, sans chiffres inventés).
8. Mentions légales et confidentialité : structure à faire valider juridiquement.
