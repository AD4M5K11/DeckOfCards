using DeckOfCards.Functionality;
using DeckOfCards.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static DeckOfCards.Functionality.DeckOfCardsfunctionality;

namespace DeckOfCards.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class DeckOfCardsController : ControllerBase
    {
        private readonly ILogger<DeckOfCardsController> _logger;

        public DeckOfCardsController(ILogger<DeckOfCardsController> logger)
        {
            _logger = logger;
        }

        DeckOfCardsfunctionality.Deck Deck = new DeckOfCardsfunctionality.Deck();

        [HttpGet]
        public IEnumerable<DeckOfCards> Get()
        {
            Deck.Reset();
            Deck.Shuffle();
            Deck.TakeCard();

            return Deck.CardDeck;
        }
        
        

    }
}
