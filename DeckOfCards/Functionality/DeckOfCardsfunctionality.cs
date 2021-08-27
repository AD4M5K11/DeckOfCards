using DeckOfCards.Controllers;
using DeckOfCards.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeckOfCards.Functionality
{
    public class DeckOfCardsfunctionality
    {
        public class Deck
        {

            public Deck()
            {
                Reset();
            }

            public List<DeckOfCards> CardDeck { get; set; }

            public void Reset()
            {
                CardDeck = Enumerable.Range(1, 4)
                    .SelectMany(s => Enumerable.Range(1, 13)
                                        .Select(c => new DeckOfCards()
                                        {
                                            Suit = (Suits)s,
                                            CardNumber = (CardNumber)c
                                        }
                                                )
                                )
                       .ToList();
            }

            public void Shuffle()
            {
                CardDeck = CardDeck.OrderBy(c => Guid.NewGuid())
                             .ToList();
            }

            public DeckOfCards TakeCard()
            {
                var card = CardDeck.FirstOrDefault();
                CardDeck.Remove(card);

                return card;
            }
        }
    }
}
