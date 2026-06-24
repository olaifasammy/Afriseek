import { useState } from 'react';
import { StudioCard, StudioButton, StudioInput } from '../../components/StudioUI';
import { Stepper, SidebarCard } from '../../components/UIComponents';
import { Layers, Plus } from 'lucide-react';
import { ResponsivePageTemplate } from '../../../shared/templates/ResponsivePageTemplate';

const steps = [
  { id: 1, name: 'Basic Information' },
  { id: 2, name: 'Properties' },
  { id: 3, name: 'Relationships' },
  { id: 4, name: 'Constraints' },
  { id: 5, name: 'Review & Create' },
];

export const CreateOntology = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ 
    name: '', displayName: '', pluralName: '', category: '', description: '', 
    icon: '', color: '#6366F1', namespace: '', parent: '' 
  });

  const handleCreate = async () => {
      try {
          const response = await fetch('/api/studio/ontology-definitions', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
          });
          if (response.ok) {
              window.location.href = '/admin/ontology';
          }
      } catch (error) {
          console.error('Failed to create ontology:', error);
      }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="block text-sm text-zinc-400">Entity Name *</label>
                    <StudioInput placeholder="e.g., Person" value={formData.name} onChange={(e: any) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm text-zinc-400">Display Name *</label>
                    <StudioInput placeholder="e.g., Person" value={formData.displayName} onChange={(e: any) => setFormData({...formData, displayName: e.target.value})} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="block text-sm text-zinc-400">Plural Display Name *</label>
                    <StudioInput placeholder="e.g., People" value={formData.pluralName} onChange={(e: any) => setFormData({...formData, pluralName: e.target.value})} />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm text-zinc-400">Entity Type Category *</label>
                    <select className="w-full bg-zinc-900 border border-zinc-800 rounded-md py-2 px-3 text-sm text-white focus:outline-none focus:border-amber-500">
                        <option>Select category</option>
                    </select>
                </div>
            </div>
            <div className="space-y-2">
                <label className="block text-sm text-zinc-400">Description</label>
                <textarea className="w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-sm text-white focus:outline-none focus:border-amber-500" rows={4} placeholder="Provide a clear description..." value={formData.description} onChange={(e: any) => setFormData({...formData, description: e.target.value})} />
            </div>
        </div>
      );
      case 1: return (
        <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-300">Properties</h3>
            <StudioCard className="bg-zinc-800">
                <p className="text-sm text-zinc-400">Manage entity properties (Name, Type, Required).</p>
            </StudioCard>
            <StudioButton variant="secondary" size="sm"><Plus size={16}/> Add Property</StudioButton>
        </div>
      );
      case 2: return (
        <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-300">Relationships</h3>
            <StudioCard className="bg-zinc-800">
                <p className="text-sm text-zinc-400">Define relationships to other entities.</p>
            </StudioCard>
            <StudioButton variant="secondary" size="sm"><Plus size={16}/> Add Relationship</StudioButton>
        </div>
      );
      case 3: return (
        <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-300">Constraints & Rules</h3>
            <StudioCard className="bg-zinc-800">
                <p className="text-sm text-zinc-400">Define validation rules for this entity.</p>
            </StudioCard>
            <StudioButton variant="secondary" size="sm"><Plus size={16}/> Add Rule</StudioButton>
        </div>
      );
      case 4: return (
        <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-300">Review & Create</h3>
            <div className="p-4 bg-zinc-800 rounded text-sm text-zinc-300">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Category:</strong> {formData.category}</p>
                <p>Ready to publish this entity type to the ontology.</p>
            </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <ResponsivePageTemplate
        title="Create New Entity"
        description="Define a new entity type in your ontology. Set its properties, rules and relationships."
        actions={
            <>
                <StudioButton variant="secondary" onClick={() => window.location.href = '/admin/ontology'}>Cancel</StudioButton>
                <StudioButton onClick={handleCreate}>Create Entity</StudioButton>
            </>
        }
    >
      <Stepper steps={steps} currentStep={currentStep} />

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-6">
          <StudioCard title={steps[currentStep].name}>
            {renderStepContent()}
          </StudioCard>
          
          <div className='flex justify-between gap-4'>
            <StudioButton variant="secondary" disabled={currentStep === 0} onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}>Previous Step</StudioButton>
            <StudioButton onClick={() => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))}>Next Step</StudioButton>
          </div>
        </div>
        
        <div className="w-full lg:w-96 space-y-6">
          <SidebarCard title="Design Progress">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-4 border-amber-500 flex items-center justify-center font-bold text-lg">{((currentStep / (steps.length-1)) * 100).toFixed(0)}%</div>
                <div>
                    <div className="font-bold text-white">Complete</div>
                    <div className="text-xs text-zinc-400">Step {currentStep + 1} of {steps.length}</div>
                </div>
            </div>
          </SidebarCard>
          
          <SidebarCard title="Quick Tips">
             <ul className="text-xs text-zinc-400 space-y-2 list-disc list-inside">
                <li>Choose a clear and meaningful name.</li>
                <li>Use a consistent naming convention.</li>
                <li>Add a detailed description.</li>
            </ul>
          </SidebarCard>
          
          <SidebarCard title="Entity Preview">
            <div className="h-32 flex flex-col items-center justify-center text-zinc-500 border-2 border-dashed border-zinc-800 rounded-lg">
                <Layers size={32} />
                <p className="text-xs mt-2">Entity Preview will appear as you fill in the information</p>
            </div>
          </SidebarCard>
        </div>
      </div>
    </ResponsivePageTemplate>
  );
};

export default CreateOntology;
