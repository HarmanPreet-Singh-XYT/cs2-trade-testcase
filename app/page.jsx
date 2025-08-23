'use client'
import React, { useState, useEffect } from 'react';
import {testScenarios} from './data'

const MarketTestSite = () => {
  const [selectedScenario, setSelectedScenario] = useState('bargainOnly');
  const [showBargainDialog, setShowBargainDialog] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [bargainAmount, setBargainAmount] = useState('');
  const [confirmationType, setConfirmationType] = useState('');

  const currentItems = testScenarios[selectedScenario];

  const handleBuyClick = (item) => {
    if (item.buyDisabled) return;
    setConfirmationType('buy');
    setShowConfirmDialog(true);
  };

  const handleBargainClick = (item) => {
    setShowBargainDialog(true);
  };

  const handleBargainSubmit = () => {
    setShowBargainDialog(false);
    setConfirmationType('bargain');
    setShowConfirmDialog(true);
  };

  const handleConfirm = (confirmed) => {
    setShowConfirmDialog(false);
    setConfirmationType('');
    setBargainAmount('');
    if (confirmed) {
      console.log(`${confirmationType} confirmed!`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <h1 className="text-2xl font-bold mb-4">Market Auto-Buyer Test Environment</h1>
        
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium">Test Scenario:</label>
          <select 
            value={selectedScenario} 
            onChange={(e) => setSelectedScenario(e.target.value)}
            className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm text-white"
          >
            <option value="mixed">Mixed Conditions</option>
            <option value="profitable">All Profitable</option>
            <option value="unprofitable">All Unprofitable</option>
            <option value="bargainOnly">Bargain Only</option>
          </select>
          
          <div className="ml-auto text-sm text-gray-400">
            Items: {currentItems?.length || 0}
          </div>
        </div>
      </div>

      {/* Market Items Container - Exact structure needed by script */}
      <app-item-container>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems?.map((item, index) => (
            <item-card key={item.id} className="relative"> {/* Added relative positioning */}
              <mat-card className="hidden"> {/* Hide the xpath structure */}
                <div>
                  <div>
                    {/* First div - Item name section */}
                    <div>
                      <app-item-name>
                        <div>
                          <div>{item.name}</div>
                          <div>{item.subtext}</div>
                        </div>
                      </app-item-name>
                    </div>
                    
                    {/* Second div - empty */}
                    <div></div>
                    
                    {/* Third div - Price and button section */}
                    <div>
                      {/* Price link */}
                      <a>
                        <div>
                          <span>${item.sitePrice.toFixed(2)}</span>
                          <span>Bid ${item.buffBid.toFixed(2)}</span>
                          <span>Ask ${item.buffBuy.toFixed(2)}</span>
                        </div>
                      </a>
                      
                      {/* Steam percentage section */}
                      <div>
                        <app-seller-details-widget>
                          <div>
                            <a>
                              <span>{item.steamPercentage}%</span>
                            </a>
                          </div>
                        </app-seller-details-widget>
                      </div>
                      
                      {/* Button section */}
                      <div>
                        <div>
                          <div>
                            <div>
                              <button 
                                onClick={() => handleBargainClick(item)}
                              >
                                Bargain ${(item.buffBuy * 0.9).toFixed(2)}
                              </button>
                              <button 
                                disabled={item.buyDisabled}
                                onClick={() => handleBuyClick(item)}
                              >
                                {item.buyDisabled ? 'Buy (Disabled)' : 'Buy Now'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </mat-card>
              
              {/* Visual representation overlay - Now properly positioned */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 min-h-[300px]">
                <div className="mb-4">
                  <div className="text-lg font-semibold text-white mb-1">{item.name}</div>
                  <div className="text-sm text-gray-400 mb-3">{item.subtext}</div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-500">Site Price</div>
                      <div className="text-lg font-bold text-green-400">${item.sitePrice.toFixed(2)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Steam %</div>
                      <div className="text-lg font-bold text-yellow-400">{item.steamPercentage}%</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-500">Buff Bid</div>
                      <div className="text-sm text-blue-400">${item.buffBid.toFixed(2)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Buff Ask</div>
                      <div className="text-sm text-blue-400">${item.buffBuy.toFixed(2)}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleBargainClick(item)}
                      className="flex-1 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 disabled:cursor-not-allowed px-3 py-2 rounded text-sm font-medium text-white transition-colors"
                    >
                      Bargain ${(item.buffBuy * 0.9).toFixed(2)}
                    </button>
                    <button 
                      onClick={() => handleBuyClick(item)}
                      disabled={item.buyDisabled}
                      className={`flex-1 px-3 py-2 rounded text-sm font-medium text-white transition-colors ${
                        item.buyDisabled 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-green-600 hover:bg-green-700'
                      }`}
                    >
                      {item.buyDisabled ? 'Buy (Disabled)' : 'Buy Now'}
                    </button>
                  </div>
                </div>
              </div>
            </item-card>
          )) || <div className="text-center text-gray-400 col-span-full">No items found</div>}
        </div>
      </app-item-container>

      {/* Rest of your dialogs remain the same... */}
      {showBargainDialog && (
        <>
          <div style={{ position: 'absolute', top: '-9999px' }}>
            <div></div>
            <div></div>
            <div>
              <mat-dialog-container>
                <div>
                  <div>
                    <app-make-offer-dialog>
                      <div>
                        <div></div>
                        <div></div>
                        <div>
                          <div></div>
                          <div>
                            <div></div>
                            <div>
                              <mat-form-field>
                                <div>
                                  <div></div>
                                  <div>
                                    <div></div>
                                    <div>
                                      <input 
                                        type="text" 
                                        value={bargainAmount}
                                        onChange={(e) => setBargainAmount(e.target.value)}
                                        placeholder="Enter bargain amount"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </mat-form-field>
                              <button onClick={handleBargainSubmit}>
                                Submit Offer
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </app-make-offer-dialog>
                  </div>
                </div>
              </mat-dialog-container>
            </div>
          </div>
          
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 border border-gray-600">
              <h3 className="text-lg font-bold mb-4">Make Bargain Offer</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Offer Amount ($)</label>
                <input 
                  type="number" 
                  value={bargainAmount}
                  onChange={(e) => setBargainAmount(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                  placeholder="Enter bargain amount"
                  step="0.01"
                />
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={handleBargainSubmit}
                  className="flex-1 bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-medium transition-colors"
                >
                  Submit Offer
                </button>
                <button 
                  onClick={() => setShowBargainDialog(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {showConfirmDialog && (
        <>
          <div style={{ position: 'absolute', top: '-9999px' }}>
            <div></div>
            <div></div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              {confirmationType === 'bargain' && <div></div>}
              <div>
                <app-confirm-dialog>
                  <div>
                    <div></div>
                    <div>
                      <button onClick={() => handleConfirm(true)}>
                        Yes
                      </button>
                      <button onClick={() => handleConfirm(false)}>
                        No
                      </button>
                    </div>
                  </div>
                </app-confirm-dialog>
              </div>
            </div>
          </div>
          
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4 border border-gray-600">
              <h3 className="text-lg font-bold mb-4">
                {confirmationType === 'bargain' ? 'Confirm Bargain' : 'Confirm Purchase'}
              </h3>
              <p className="text-gray-300 mb-6">
                {confirmationType === 'bargain' 
                  ? `Are you sure you want to submit a bargain offer of $${bargainAmount}?`
                  : 'Are you sure you want to purchase this item?'
                }
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => handleConfirm(true)}
                  className="flex-1 bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-medium transition-colors"
                >
                  Yes
                </button>
                <button 
                  onClick={() => handleConfirm(false)}
                  className="flex-1 bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-medium transition-colors"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="fixed bottom-4 right-4 bg-gray-800 border border-gray-600 rounded-lg p-4 max-w-sm">
        <h4 className="font-bold mb-2">Test Instructions</h4>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• Open browser console to see logs</li>
          <li>• Paste the auto-buyer script in console</li>
          <li>• Toggle different scenarios to test various conditions</li>
          <li>• The structure matches the XPaths from your code</li>
        </ul>
      </div>
    </div>
  );
};

export default MarketTestSite;